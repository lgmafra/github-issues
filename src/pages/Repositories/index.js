import React, { Component } from 'react';

import {
  View, Text, TextInput, TouchableOpacity, ActivityIndicator, FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '~/services/api';
import AsyncStorage from '@react-native-community/async-storage';

import Header from '~/components/Header';
import RepositoryItem from '~/pages/Repositories/RepositoryItem';

import styles from './styles';

class Repositories extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    this.setState({ loading: false, repositories: await this.getLocalRepositories() });
  }

  getRepository = async () => {
    this.setState({ loading: true });
    const { repositories, repositoryInput } = this.state;

    try {
      const { data } = await api.get(`/repos/${repositoryInput}`);

      this.setState({
        repositoryInput: '',
        loading: false,
        repositories: [...repositories, data],
      });

      const localRepositories = await this.getLocalRepositories();

      this.setLocalRepositories([...localRepositories, data]);
    } catch (error) {
      console.tron.log(error);
    }
  };

  getLocalRepositories = async () => JSON.parse(await AsyncStorage.getItem('@GihubIssues:repositories')) || [];

  setLocalRepositories = async (repositories) => {
    await AsyncStorage.setItem('@GihubIssues:repositories', JSON.stringify(repositories));
  };

  renderRepositories = () => {
    const { repositories } = this.state;

    return (
      <FlatList
        keyExtractor={item => item.id}
        data={repositories}
        renderItem={this.renderListItem}
      />
    );
  };

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  render() {
    const { repositoryInput, loading } = this.state;

    return (
      <View style={styles.container}>
        <Header title="GitIssues" />

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            value={repositoryInput}
            placeholder="Adicionar novo repositório"
            onChangeText={text => this.setState({ repositoryInput: text })}
          />

          <TouchableOpacity style={styles.button} onPress={this.getRepository}>
            {loading ? <ActivityIndicator /> : <Icon name="plus" size={24} />}
          </TouchableOpacity>
        </View>

        <View style={styles.separator} />

        {this.renderRepositories()}
      </View>
    );
  }
}

export default Repositories;

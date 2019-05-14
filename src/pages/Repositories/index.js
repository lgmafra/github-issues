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
    refreshing: false,
    errorMessage: '',
  };

  async componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });

    this.setState({ refreshing: false, repositories: await this.getLocalRepositories() });
  };

  getRepository = async () => {
    this.setState({ loading: true, errorMessage: '' });
    const { repositories, repositoryInput } = this.state;

    try {
      const { data } = await api.get(`/repos/${repositoryInput}`);

      const repository = repositories.filter(repo => repo.id === data.id);
      console.tron.log(repository);

      if (repository.length > 0) {
        this.setState({ errorMessage: 'Repositório já existe' });
        return;
      }

      this.setState({
        repositoryInput: '',
        loading: false,
        repositories: [...repositories, data],
      });

      const localRepositories = await this.getLocalRepositories();

      this.setLocalRepositories([...localRepositories, data]);
    } catch (error) {
      this.setState({ errorMessage: 'Repositório não encontrado' });
    } finally {
      this.setState({ loading: false });
    }
  };

  getLocalRepositories = async () => JSON.parse(await AsyncStorage.getItem('@GihubIssues:repositories')) || [];

  setLocalRepositories = async (repositories) => {
    await AsyncStorage.setItem('@GihubIssues:repositories', JSON.stringify(repositories));
  };

  renderRepositories = () => {
    const { repositories, refreshing } = this.state;

    return (
      <FlatList
        keyExtractor={item => String(item.id)}
        data={repositories}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    );
  };

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  render() {
    const { repositoryInput, loading, errorMessage } = this.state;

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

        {!!errorMessage && <Text style={styles.error}>{errorMessage}</Text>}

        <View style={styles.separator} />

        {this.renderRepositories()}
      </View>
    );
  }
}

export default Repositories;

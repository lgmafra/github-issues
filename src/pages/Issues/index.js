import React, { Component } from 'react';

import { Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import IssuesItems from '~/pages/Issues/IssuesItems';
import api from '~/services/api';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Issues extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    issues: [],
    loading: true,
    error: '',
    refreshing: false,
  };

  async componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    const { navigation } = this.props;
    this.setState({ refreshing: true });

    try {
      const { data } = await api.get(`/repos/${navigation.getParam('full_name')}/issues`);

      this.setState({ issues: data });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false, refreshing: false });
    }
  };

  loadMoreIssues = () => {

  }

  renderIssues = () => {
    const { issues, refreshing } = this.state;

    if (issues.length > 0) {
      return (
        <FlatList
          keyExtractor={item => String(item.id)}
          data={issues}
          renderItem={this.renderListItem}
          onRefresh={this.loadIssues}
          refreshing={refreshing}
          // onEndReached={this.loadMoreIssues}
        />
      );
    }
    return <Text>Não há issues para esse repositório</Text>
  };

  renderListItem = ({ item }) => <IssuesItems issue={item} />;

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.all}>Todos</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.opened}>Abertas</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.closed}>Fecahdas</Text>
          </TouchableOpacity>
        </View>

        {loading ? <ActivityIndicator /> : this.renderIssues()}
      </View>
    );
  }
}

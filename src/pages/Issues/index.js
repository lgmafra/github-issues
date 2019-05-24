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
    activeFilter: 'all',
  };

  async componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async (state = 'all') => {
    const { navigation } = this.props;
    this.setState({ refreshing: true, activeFilter: state });

    const stateFilter = `?state=${state}`;

    try {
      const { data } = await api.get(`/repos/${navigation.getParam('full_name')}/issues${stateFilter}`);

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
    return <Text>Não há issues para esse repositório</Text>;
  };

  renderListItem = ({ item }) => <IssuesItems issue={item} />;

  render() {
    const { loading, activeFilter } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.loadIssues('all')}>
            <Text style={[styles.buttonText, activeFilter === 'all' && styles.activeFilter]}>Todos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.loadIssues('open')}>
            <Text style={[styles.buttonText, activeFilter === 'open' && styles.activeFilter]}>Abertas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.loadIssues('closed')}>
            <Text style={[styles.buttonText, activeFilter === 'closed' && styles.activeFilter]}>Fecahdas</Text>
          </TouchableOpacity>
        </View>

        {loading ? <ActivityIndicator /> : this.renderIssues()}
      </View>
    );
  }
}

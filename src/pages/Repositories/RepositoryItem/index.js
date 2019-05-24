import React, { Component } from 'react';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

import styles from './styles';

class RepositoryItem extends Component {
  static propTypes = {
    repository: PropTypes.shape({
      name: PropTypes.string,
      owner: PropTypes.shape({
        avatar_url: PropTypes.string,
        login: PropTypes.string,
      }).isRequired,
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  openIssues = () => {
    const { repository, navigation } = this.props;

    navigation.navigate('Issues', {
      title: repository.name,
      full_name: repository.full_name,
    });
  };

  render() {
    const { repository } = this.props;
    return (
      <TouchableOpacity onPress={this.openIssues}>
        <View style={styles.container}>
          <Image style={styles.avatar} source={{ uri: repository.owner.avatar_url }} />

          <View style={styles.info}>
            <Text style={styles.name}>{repository.name}</Text>
            <Text style={styles.login}>{repository.owner.login}</Text>
          </View>

          <Text style={styles.icon}>
            <Icon name="angle-right" size={24} />
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(RepositoryItem);

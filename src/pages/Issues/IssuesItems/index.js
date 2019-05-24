import React, { Component } from 'react';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './styles';

class IssuesItems extends Component {
  static propTypes = PropTypes.shape({
    title: PropTypes.string,
    user: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
  }).isRequired;

  openIssuePage = () => {};

  render() {
    const { issue } = this.props;
    return (
      <TouchableOpacity onPress={this.openIssuePage}>
        <View style={styles.container}>
          <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />
          <View style={styles.info}>
            <Text numberOfLines={1} style={styles.title}>
              {issue.title}
            </Text>
            <Text style={styles.login}>{issue.user.login}</Text>
          </View>

          <Text style={styles.icon}>
            <Icon name="angle-right" size={24} />
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default IssuesItems;

import React, { Component } from 'react';

import {
  View, Text, StatusBar, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  backPage = () => {};

  render() {
    const { title } = this.props;
    const {
      state: { params },
      navigate,
    } = this.props.navigation;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <View style={styles.left}>
          {!!params && (
            <TouchableOpacity onPress={() => navigate('Repositories')}>
              <Icon name="angle-left" size={24} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.title}>
          <Text>{title}</Text>
        </View>
        <View style={styles.right} />
      </View>
    );
  }
}

export default withNavigation(Header);

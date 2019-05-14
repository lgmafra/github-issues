import React from 'react';

import { View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Header = ({ title }) => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" />

    <View style={styles.left} />
    <View style={styles.title}>
      <Text>{title}</Text>
    </View>
    <View style={styles.right} />
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

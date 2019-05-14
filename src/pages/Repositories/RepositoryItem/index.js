import React from 'react';

import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RepositoryItem = ({ repository }) => (
  <View style={styles.constainer}>
    <Image style={styles.avatar} source={{ url: repository.owner.avatar_url }} />

    <View style={styles.info}>
      <Text style={styles.name}>{repository.name}</Text>
      <Text style={styles.login}>{repository.owner.login}</Text>
    </View>

    <Text style={styles.icon}>
      <Icon name="angle-right" size={24} />
    </Text>
  </View>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default RepositoryItem;

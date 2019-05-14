import React from 'react';

import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

// import { Container } from './styles';

const RepositoryItem = ({ repository }) => (
  <View>
    <Image source={{ url: repository.owner.avatar_url }} />
    <Text>{repository.name}</Text>
    <Text>{repository.owner.login}</Text>
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

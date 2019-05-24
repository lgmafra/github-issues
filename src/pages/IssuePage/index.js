import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

class IssuePage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.issue.title,
  });

  static propTypes = PropTypes.shape({
    navigation: PropTypes.shape({
      state: PropTypes.func,
    }),
  }).isRequired;

  render() {
    const { navigation } = this.props;
    return <WebView source={{ uri: navigation.state.params.issue.html_url }} />;
  }
}

export default IssuePage;

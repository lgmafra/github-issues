import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: colors.lighter,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.light,
    margin: metrics.baseMargin,
    height: 48,
    alignItems: 'center',
  },

  buttonContainer: {
    alignItems: 'center',
    flex: 1,
  },

  buttonText: {
    color: colors.regular,
    fontSize: 14,
  },

  activeFilter: {
    color: colors.dark,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;

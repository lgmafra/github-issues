import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: colors.lighter,
  },

  form: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 40,
    margin: metrics.baseMargin,
    paddingHorizontal: metrics.basePadding,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: metrics.baseMargin,
  },

  separator: {
    borderColor: colors.light,
    borderBottomWidth: 1,
    margin: metrics.baseMargin,
  },

  error: {
    color: colors.danger,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;

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
    paddingLeft: metrics.basePadding + 10,
    paddingRight: metrics.basePadding + 10,
  },
});

export default styles;

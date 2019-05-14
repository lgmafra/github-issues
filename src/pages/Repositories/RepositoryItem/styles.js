import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: colors.white,
    margin: metrics.baseMargin,
    padding: metrics.basePadding,
    flexDirection: 'row',
    borderRadius: metrics.baseRadius,
    alignItems: 'center',
  },
  avatar: {
    height: 50,
    width: 50,
  },
  info: {
    marginLeft: metrics.baseMargin * 2,
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darker,
  },
  login: {
    color: colors.darkTransparent,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.light,
  },
});

export default styles;

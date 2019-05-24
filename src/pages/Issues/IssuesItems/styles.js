import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
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
    borderRadius: 25,
  },
  info: {
    marginLeft: metrics.baseMargin * 2,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darker,
    marginRight: metrics.baseMargin,
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

import { createAppContainer, createStackNavigator } from 'react-navigation';

import Repositories from '~/pages/Repositories';
import Issues from '~/pages/Issues';
import IssuePage from '~/pages/IssuePage';

import { colors } from '~/styles';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Repositories,
      Issues,
      IssuePage,
    },
    {
      defaultNavigationOptions: {
        headerTintColor: colors.darker,
        headerBackTitle: null,
      },
    },
  ),
);

export default Routes;

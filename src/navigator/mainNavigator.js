import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth4437Navigator from '../features/EmailAuth4437/navigator';
import EmailAuth4436Navigator from '../features/EmailAuth4436/navigator';
import EmailAuth4435Navigator from '../features/EmailAuth4435/navigator';
import EmailAuth4434Navigator from '../features/EmailAuth4434/navigator';
import UserProfile4425Navigator from '../features/UserProfile4425/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
EmailAuth4437: { screen: EmailAuth4437Navigator },
EmailAuth4436: { screen: EmailAuth4436Navigator },
EmailAuth4435: { screen: EmailAuth4435Navigator },
EmailAuth4434: { screen: EmailAuth4434Navigator },
UserProfile4425: { screen: UserProfile4425Navigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

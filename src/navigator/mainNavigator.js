import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth4442Navigator from '../features/EmailAuth4442/navigator';
import EmailAuth4440Navigator from '../features/EmailAuth4440/navigator';
import EmailAuth4439Navigator from '../features/EmailAuth4439/navigator';
import EmailAuth4438Navigator from '../features/EmailAuth4438/navigator';
import EmailAuth4437Navigator from '../features/EmailAuth4437/navigator';
import EmailAuth4436Navigator from '../features/EmailAuth4436/navigator';
import EmailAuth4434Navigator from '../features/EmailAuth4434/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
EmailAuth4442: { screen: EmailAuth4442Navigator },
EmailAuth4440: { screen: EmailAuth4440Navigator },
EmailAuth4439: { screen: EmailAuth4439Navigator },
EmailAuth4438: { screen: EmailAuth4438Navigator },
EmailAuth4437: { screen: EmailAuth4437Navigator },
EmailAuth4436: { screen: EmailAuth4436Navigator },
EmailAuth4434: { screen: EmailAuth4434Navigator },
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

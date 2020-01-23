import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

//screens
import HomeScreen from './src/screens/HomeSceen';
import Stores from './src/screens/Stores';
import Cart from './src/screens/Cart';
import Account from './src/screens/Account';
import OrderTracking from './src/screens/OrderTracking';
import LogIn from './src/screens/LogIn';
import SignUp from './src/screens/SignUp';
/* import Loading from './src/screens/Loading'; */

//components
import TabBarComponent from './src/components/TabBarComponent';

//firebase
/* import * as firebase from 'firebase';
import {firebaseConfig} from './config';
firebase.initializeApp(firebaseConfig);
 */
const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  Stores: {
    screen: Stores,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  LogIn: {
    screen: LogIn,
    navigationOptions: ({navigation}) => ({
      title: '',
    }),
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: ({navigation}) => ({title: ''}),
  },
  /*   Loading: {
    screen: Loading,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  }, */
});

const StoreStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  Stores: {
    screen: Stores,
    navigationOptions: ({navigation}) => ({header: null}),
  },
});

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Stores: Stores,
    Cart: Cart,
    Tracking: OrderTracking,
    Account: Account,
  },
  {
    tabBarComponent: props => {
      return <TabBarComponent {...props} />;
    },
  },
);

const Menu = createDrawerNavigator(
  {
    Home: {screen: AppNavigator},
    Stores: {screen: StoreStack},
    Setting: {screen: StoreStack},
    Guide: {screen: StoreStack},
    Login: {screen: StoreStack},
  },
  {
    drawerWidth: 300,
    drawerPosition: 'left',
    initialRouteName: 'Home',
  },
);
export default App = createAppContainer(Menu);

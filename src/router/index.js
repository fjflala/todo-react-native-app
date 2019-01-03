/**
 * Module dependencies
 */
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

/**
 * Views
 */
import HomeView from '../views/HomeView/index';

/**
 * Router
 */
const Router = createStackNavigator({
  Home: {
    screen: HomeView,
  },
}, {
  initialRouteName: 'Home',
});

const RouterContainer = createAppContainer(Router);

export default RouterContainer;

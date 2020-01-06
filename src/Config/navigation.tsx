import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, HotelsScreen, DetailScreen } from '../Sreens';

const MainNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Alojamientos'
        }
    },
    Hotels: {
        screen: HotelsScreen,
        navigationOptions: {
            title: 'Hoteles'
        }
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: {
            title: 'Tu hotel'
        }
    },
});

const App = createAppContainer(MainNavigator);

export default App;
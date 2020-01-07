import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, HotelsScreen, DetailScreen, CitiesScreen } from '../Sreens';
import { Colors } from '../Config/constants'

const MainNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Alojamientos',
            headerStyle: {
                backgroundColor: Colors.purple500,
            },
            headerTintColor: Colors.white
        }
    },
    Cities: {
        screen: CitiesScreen,
        navigationOptions: {
            title: 'Ciudades',
            headerStyle: {
                backgroundColor: Colors.purple500,
            },
            headerTintColor: Colors.white
        }
    },
    Hotels: {
        screen: HotelsScreen,
        navigationOptions: {
            title: 'Hoteles',
            headerStyle: {
                backgroundColor: Colors.purple500,
            },
            headerTintColor: Colors.white
        }
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: {
            title: 'Tu hotel',
            headerStyle: {
                backgroundColor: Colors.purple500,
            },
            headerTintColor: Colors.white
        }
    },
});

const App = createAppContainer(MainNavigator);

export default App;
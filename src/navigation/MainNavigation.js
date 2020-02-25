import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import AddItem from '../screens/AddItem'
import MainScreen from '../screens/MainScreen'
import Item from '../screens/Item'

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: MainScreen,
    },
    AddItem: {
      screen: AddItem,
    },
    Item: {
      screen: Item,
    },

  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)

export default createAppContainer(MainNavigator)
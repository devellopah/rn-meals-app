import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <>
    <StatusBar style="dark" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MealsCategories" component={CategoriesScreen}></Stack.Screen>
        <Stack.Screen name="MealsOverviewScreen" component={MealsOverviewScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App
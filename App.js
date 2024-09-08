import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CATEGORIES } from './data/dummy-data'


import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailsScreen from './screens/MealDetailsScreen'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <>
    <StatusBar style="dark" />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        contentStyle: {backgroundColor: '#3f2f25'},
        headerTintColor: 'white'
      }}>
        <Stack.Screen
          name="MealsCategories"
          component={CategoriesScreen}
          options={{
            title: 'Meals Categories'
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="MealsOverview"
          component={MealsOverviewScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="MealDetails"
          component={MealDetailsScreen}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App
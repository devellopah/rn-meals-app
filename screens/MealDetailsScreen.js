
import { Text } from 'react-native'

function MealDetailsScreen({ route, navigation }) {
  return <Text>{route.params.mealId} details</Text>
}

export default MealDetailsScreen
import { View, Text, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { MEALS } from '../data/dummy-data'

function MealsOverviewScreen(params) {
  const route = useRoute()
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {route.params.categoryId}</Text>
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})
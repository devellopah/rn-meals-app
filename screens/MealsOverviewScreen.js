import { View, FlatList, StyleSheet } from 'react-native'
import { useLayoutEffect } from 'react'
// import { useRoute } from '@react-navigation/native'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem'

function MealsOverviewScreen({ route, navigation }) {
  // const route = useRoute()
  const catId = route.params.categoryId
  const displayedMeals = MEALS.filter(item => item.categoryIds.indexOf(catId) > -1)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find(cat => cat.id === catId).title
    })
  }, [catId, navigation])

  const renderMealItem = (itemData) => {
    const { title, imageUrl, duration, complexity, affordability } = itemData.item
    return <MealItem
            title={title}
            imageUrl={imageUrl}
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
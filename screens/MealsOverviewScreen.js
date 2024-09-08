import { View, FlatList, StyleSheet } from 'react-native'
import { useLayoutEffect } from 'react'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem'

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId
  const displayedMeals = MEALS.filter(item => item.categoryIds.indexOf(catId) > -1)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find(cat => cat.id === catId).title
    })
  }, [catId, navigation])

  const renderMealItem = ({ item }) => {

    const onPressHandler = () => {
      navigation.navigate('MealDetails', {
        mealId: item.id
      })
    }

    return <MealItem
      title={item.title}
      imageUrl={item.imageUrl}
      duration={item.duration}
      complexity={item.complexity}
      affordability={item.affordability}
      onPressHandler={onPressHandler}
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
import { useState } from 'react'
import { FlatList, View } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = ({ navigation }) => {

  const renderCategoryItem = ({ item }) => {

    const onPressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: item.id
      })
    }
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={onPressHandler}
      />
    )
  }

  const [numColumns, setNumColumns] = useState(2)

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      key={numColumns}
    />
  )
}

export default CategoriesScreen
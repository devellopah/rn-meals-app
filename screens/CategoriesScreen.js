import { FlatList, View } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'

const renderCategoryItem = ({ item }) =>
  <CategoryGridTile title={item.title} color={item.color} />

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
    />
  )
}

export default CategoriesScreen
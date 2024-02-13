import { FlatList, View, useState } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'

const renderCategoryItem = ({ item }) =>
  <CategoryGridTile title={item.title} color={item.color} />

const CategoriesScreen = () => {

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
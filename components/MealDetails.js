import { View, Text, StyleSheet } from 'react-native'

function MealDetails({ duration, complexity, affordability }) {
  return  <View style={styles.details}>
    <Text style={styles.detailItem}>{duration}m</Text>
    <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
    <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
  </View>
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    fontSize: 12,
    marginHorizontal: 4,
  }
})

export default MealDetails
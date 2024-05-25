import { View, Pressable, Text, Image, StyleSheet } from 'react-native'

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
  return (
    <View>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({ pressed }) => pressed && styles.buttonPressed}
      >
        <View>
          <Image source={{uri: imageUrl}} style={styles.image} />
          <Text style={styles.title}>{ title }</Text>
        </View>
        <View>
          <Text>{duration}m</Text>
          <Text>{complexity.toUpperCase()}</Text>
          <Text>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  image: {
    width:'100%',
    height: 200,
  },
  buttonPressed: {
    opacity: 0.25,
  },
})

export default MealItem
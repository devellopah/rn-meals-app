import { View, Pressable, Text, Image, StyleSheet } from 'react-native'
import MealDetails from './MealDetails'


function MealItem({ title, imageUrl, duration, complexity, affordability, onPressHandler }) {
  return (
    <View>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({ pressed }) => pressed && styles.buttonPressed}
        onPress={onPressHandler}
      >
        <View>
          <Image source={{uri: imageUrl}} style={styles.image} />
          <Text style={styles.title}>{ title }</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
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
import { View, Text, ImageBackground, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen ({navigation}) {
  const [togglePrototype, setTogglePrototype] = useState(false)
  return (
    <>
      <ImageBackground source={require('../../assets/Toggled-homescreen.jpeg')} style={{ width: '100%', height: '100%' }}>
        {
          togglePrototype && <TouchableWithoutFeedback onPress={() => navigation.navigate('led_management', {})}>
            <Text style={styles.buttonText}>Don't know Toggle iQ yet? Try us!</Text>
          </TouchableWithoutFeedback>
        }
        <View style={styles.iconContainer}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff', marginRight: 10 }}>Prototype</Text>
          <TouchableWithoutFeedback onPress={() => setTogglePrototype(!togglePrototype)}>
            <Icon name={togglePrototype ? 'toggle-on' : 'toggle-off'} size={50} color="#fff" />
          </TouchableWithoutFeedback>
        </View>

      </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    position: 'absolute',

    borderRadius: 30,
    marginBottom: 180,
    bottom: 0,
    padding: 10,
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
    borderRadius: 50,
    padding: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  }
})

import React, { useCallback, useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, ImageBackground } from 'react-native';
import Slider from '@react-native-community/slider'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { handleLightingTemperature, Temperature } from '../../utils/handleLightingTemperature'


const office = require('../../assets/office.jpg');
const led = require('../../assets/horizontal-led-f.png');
const light = require('../../assets/lighted-bg.png');



export default function LedManagement() {
  const [lightIntensity, setlightIntensity] = useState(0);
  const [temperature, setTemperature] = useState(Temperature.K4);

  const updatelightIntensity = useCallback((value: number) => {
    setlightIntensity(value);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='dark' />
      <View style={styles.ledContainer}>
        <ImageBackground source={office} imageStyle={{ opacity: lightIntensity / 2550 }} style={styles.background}>
          <Image style={styles.led} source={led} />
          <Image source={light} style={[styles.lightBackground, { opacity: (lightIntensity / 255) - handleLightingTemperature(temperature) }]} />
        </ImageBackground>
      </View>
      <Text style={styles.title}>Lighting Control</Text>
      <View style={styles.sliderContainer}>
        <Text>Dim Light</Text>
        <Slider
          style={{ width: '80%', height: 40 }}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#FFC300"
          onValueChange={updatelightIntensity}
          value={lightIntensity}
        />
        <Text>Temperature</Text>
        <View style={styles.temperatureContainer}>
          <Pressable onPress={() => setTemperature(Temperature.K4)}>
            <View style={[styles.temperatureCard, temperature === Temperature.K4 ? styles.selectedTemperatureCard : null]}>
              <Text >4000K</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setTemperature(Temperature.K5)}>
            <View style={[styles.temperatureCard, temperature === Temperature.K5 ? styles.selectedTemperatureCard : null]}>
              <Text >5000K</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setTemperature(Temperature.K65)}>
            <View style={[styles.temperatureCard, temperature === Temperature.K65 ? styles.selectedTemperatureCard : null]}>
              <Text >6500K</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  ledContainer: {
    height: '40%',
    position: 'relative',
    backgroundColor: '#222222',
  },
  led: {
    width: 350,
    height: 120,
  },
  sliderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  temperatureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    alignItems: 'flex-end',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  temperatureCard: {
    height: 60,
    width: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  selectedTemperatureCard: {
    backgroundColor: '#40B8D9',
  },
  lightBackground: {
    width: 300,
    height: 220,
    position: 'absolute',
    left: -33,
    bottom: -6,
    zIndex: -1,

  },
  background: {
    width: '100%',
    height: '100%',
  },
});

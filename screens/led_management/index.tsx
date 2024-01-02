import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, Pressable, ImageBackground } from 'react-native';
import Slider from '@react-native-community/slider'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Animated, { useSharedValue } from 'react-native-reanimated';
import Svg, { Defs, ClipPath, Polygon, RadialGradient, Stop, Circle } from 'react-native-svg';


const office = require('../../assets/office.jpg');
const led = require('../../assets/horizontal-led-f.png');

const temperatures = {
  '4000K': '#F9F6EE',
  '5000K': '#FAF9F6',
  '6500K': '#FFFFFF',
};

export default function LedManagement() {
  const [dimLight, setDimLight] = useState(0);
  const [temperature, setTemperature] = useState('4000K');

  const handleDimLightChange = (value: number) => {
    setDimLight(value);
  };

  const lightStyle = {
    backgroundColor: `rgba(255, 255, 255, ${dimLight / 100})`,
    filter: `brightness(${temperature}%)`,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='dark' />
      <View style={styles.ledContainer}>
        <ImageBackground source={office} imageStyle={{ opacity: dimLight / 100 }} style={{ height: '100%', width: '100%' }}>
          <Image
            style={styles.led}
            source={led}
          />
          <View style={[styles.trapezium, {borderBottomColor: `rgba(255, 255, 255, ${dimLight / 100})`}]}></View>


        </ImageBackground>
      </View>

      <View style={styles.sliderContainer}>
        <Text>Dim Light</Text>
        <Slider
          style={{ width: '80%', height: 40 }}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#FFC300"
          onValueChange={handleDimLightChange}
          value={dimLight}
        />
        <Text>Temperature</Text>
        <View style={styles.temperatureContainer}>
          <View style={[styles.temperatureCard, temperature === '4000K' ? styles.selectedTemperatureCard : null]}>
            <Pressable onPress={() => setTemperature('4000K')}>
              <Text >4000K</Text>
            </Pressable>
          </View>
          <View style={[styles.temperatureCard, temperature === '5000K' ? styles.selectedTemperatureCard : null]}>
            <Pressable onPress={() => setTemperature('5000K')}>
              <Text >5000K</Text>
            </Pressable>
          </View>
          <View style={[styles.temperatureCard, temperature === '6500K' ? styles.selectedTemperatureCard : null]}>
            <Pressable onPress={() => setTemperature('6500K')}>
              <Text >6500K</Text>
            </Pressable>
          </View>
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
  ledContainer: {
    height: '40%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#222222',
  },
  led: {
    width: 350,
    height: 120,
  },
  dimLightContainer: {
    marginTop: 100,
    position: 'absolute',
  },
  sliderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
  trapezium: {
  position: 'absolute',
  left: 0,
  right: 110,
  bottom: 80,
  height: 250, // Adjust this value as needed
  borderLeftWidth: 20, // Adjust this value as needed
  borderRightWidth: 20, // Adjust this value as needed
  borderBottomWidth: 100, // Adjust this value as needed
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderBottomColor: 'transparent',
},
});

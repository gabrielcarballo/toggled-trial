import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

export default function LedManagement() {
  const [intensity, setIntensity] = useState(0);
  const [temperature, setTemperature] = useState(0);

  const handleIntensityChange = (value: number) => {
    setIntensity(value);
  };

  const handleTemperatureChange = (value: number) => {
    setTemperature(value);
  };

  const lightStyle = {
    backgroundColor: `rgba(255, 255, 255, ${intensity / 100})`,
    filter: `brightness(${temperature}%)`,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='dark' />
      <View style={styles.ledContainer}>
        <Image
          style={styles.led}
          source={require('../../assets/horizontal-led-f.png')}
        />

      </View>
      <View style={styles.sliderContainer}>
        <Text>Intensity</Text>
        <Slider
          style={{ width: '80%', height: 40 }}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={handleIntensityChange}
          value={intensity}
        >
        </Slider>
        <Text>Intensity</Text>
        <Slider
          style={{ width: '80%', height: 40 }}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={handleIntensityChange}
          value={intensity}
        >
        </Slider>
        <Text>Intensity</Text>
        <Slider
          style={{ width: '80%', height: 40 }}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={handleIntensityChange}
          value={intensity}
        >
        </Slider>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b3737',
  },
  ledContainer: {
    height: '40%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'red',
  },
  led: {
    width: 350,
    height: 150,
  },
  dimLightContainer: {
    marginTop: -150,
    marginLeft: 100,
    width: 100,
    height: 100,
  },
  sliderContainer: {

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
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
    <SafeAreaView >
      <StatusBar style='dark' />
      <View style={style.ledContainer}>
        <Image
          style={style.led}
          source={require('../../assets/toggled-led.png')}
        />
      </View>
      <View 
      //style={style.dimLightContainer}
      >

      </View>
        <Text>Intensity</Text>
        <TextInput
          keyboardType='ascii-capable'
          value={intensity.toString()}
        />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  ledContainer: {

    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  led: {
    width: 250,
    height: 200,
  },
//   dimLightContainer: {
//     backgroundColor: 'rgb(0,0,0)',
//     background: linear-gradient(161deg, rgba(0,0,0,1) 0%, rgba(255,254,254,1) 0%); 
// });
});
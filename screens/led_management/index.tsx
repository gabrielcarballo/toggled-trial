import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Animated, { useSharedValue } from 'react-native-reanimated';
import Svg, { Defs, ClipPath, Polygon, RadialGradient, Stop, Circle } from 'react-native-svg';


export default function LedManagement() {
  const [dimLight, setDimLight] = useState(0);
  const [temperature, setTemperature] = useState(0);

  const handleDimLightChange = (value: number) => {
    setDimLight(value);
  };

  const handleTemperatureChange = (value: number) => {
    setTemperature(value);
  };

  const lightStyle = {
    backgroundColor: `rgba(255, 255, 255, ${dimLight / 100})`,
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
        <Animated.View style={styles.dimLightContainer}>
          <Svg height="300" width="350" viewBox="10 40 120 110">
            <Defs>
              <RadialGradient id="grad" cx="35%" cy="50%" rx="50%" ry="50%" fx="50%" fy="50%" gradientUnits="userSpaceOnUse">
                <Stop offset="0%" stopColor="#ffffff" stopOpacity={dimLight / 100} />

              </RadialGradient>
              <ClipPath id="clip">
                <Polygon points="20,10 80,10 100,90 0,90" />
              </ClipPath>
            </Defs>
            <Circle cx="50" cy="50" r="120" fill="url(#grad)" clipPath="url(#clip)" />
          </Svg>
        </Animated.View>
      </View>

      <View style={styles.sliderContainer}>
        <Text>Dim Light</Text>
        <Slider
          style={{ width: '80%', height: 40 }}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={handleDimLightChange}
          value={dimLight}
        >
        </Slider>
        <Text>Temperature</Text>
        <Slider
          style={{ width: '80%', height: 40 }}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={handleTemperatureChange}
          value={temperature}
          vertical={true}
        >
        </Slider>
        {/* <Text>Intensity</Text>
        <Slider
          style={{ width: '80%', height: 40 }}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={handleIntensityChange}
          value={intensity}
        >
        </Slider> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40B8D9',
  },
  ledContainer: {
    height: '40%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor : '#222222',
  },
  led: {
    width: 350,
    height: 150,
    zIndex: 2,
  },
  dimLightContainer: {
    marginTop: 100,
    position: 'absolute',
  },
  sliderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#40B8D9',
  },
});

import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Animated, { useSharedValue } from 'react-native-reanimated';
import Svg, { Defs, ClipPath, Polygon, RadialGradient, Stop, Circle } from 'react-native-svg';
import AnimatedCircle from './components/AnimatedCircle';



export default function LedManagement() {
  const [intensity, setIntensity] = useState(0);
  const [temperature, setTemperature] = useState(0);

  const handleIntensityChange = (value: number) => {
    console.log(value);
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
      <StatusBar style='light' />
      <Animated.View style={styles.ledContainer}>
        <Image
          style={styles.led}
          source={require('../../assets/horizontal-led-f.png')}
        />
        <Animated.View >
          <Svg height="150" width="350" viewBox="0 0 100 100">
            <Defs>
              <RadialGradient id="grad" cx="70%" cy="70%" rx="70%" ry="70%" fx="70%" fy="70%" gradientUnits="userSpaceOnUse">
                <Stop offset="0%" stopColor="#fff" stopOpacity={intensity / 100} />
                <Stop offset="100%" stopColor="#fff" stopOpacity={0} />
              </RadialGradient>
              <ClipPath id="clip">
                <Polygon points="0,10 100,10 70,90 30,90" />
              </ClipPath>
            </Defs>
            <AnimatedCircle />
          </Svg>
        </Animated.View>

      </Animated.View>
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
    backgroundColor: '#222222',
  },
  ledContainer: {
    height: '40%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  trapezium: {
    width: 350,
    height: 150,
    borderBottomColor: 'transparent',
    backgroundColor: 'white',
    transform: [{ skewX: '-30deg' }],
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
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

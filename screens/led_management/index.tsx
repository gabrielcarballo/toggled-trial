import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, Pressable } from 'react-native';
import Slider from '@react-native-community/slider'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Animated, { useSharedValue } from 'react-native-reanimated';
import Svg, { Defs, ClipPath, Polygon, RadialGradient, Stop, Circle } from 'react-native-svg';

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
        <Image
          style={styles.led}
          source={require('../../assets/horizontal-led-f.png')}
        />
        <Animated.View style={styles.dimLightContainer}>
          <Svg height="300" width="350" viewBox="10 40 120 110">
            <Defs>
              <RadialGradient id="grad" cx="35%" cy="50%" rx="50%" ry="50%" fx="70%" fy="50%" gradientUnits="userSpaceOnUse">
                <Stop
                  offset='100%'
                  stopColor={temperatures[temperature]}
                  stopOpacity={dimLight > 80 ? dimLight / 100 : 0}
                />
                <Stop
                  offset='80%'
                  stopColor={temperatures[temperature]}
                  stopOpacity={dimLight > 60 ? dimLight / 100 : 0}
                />
                <Stop
                  offset='60%'
                  stopColor={temperatures[temperature]}
                  stopOpacity={dimLight > 40 ? dimLight / 100 : 0}
                />
                <Stop
                  offset='40%'
                  stopColor={temperatures[temperature]}
                  stopOpacity={dimLight > 20 ? dimLight / 100 : 0}
                />
                <Stop
                  offset='10%'
                  stopColor={temperatures[temperature]}
                  stopOpacity={dimLight > 0 ? dimLight / 100 : 0}
                />

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
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#FFC300"
          onValueChange={handleDimLightChange}
          value={dimLight}
        >
        </Slider>

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
});

import React, { useCallback, useState } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { handleLightingTemperature, Temperature } from '../../utils/handleLightingTemperature'
import { Slider } from '@rneui/themed'
import TemperatureCard from './components/TemperatureCard';
import PowerControlCard from './components/PowerControlCard';

const office = require('../../assets/office.jpg');
const led = require('../../assets/horizontal-led-f.png');
const light = require('../../assets/lighted-bg.png');

const MAX_LIGHT_INTENSITY = 255;
const TEMPERATURE_K4 = '4000';
const TEMPERATURE_K5 = '5000';
const TEMPERATURE_K65 = '6500';

interface lightState {
  isLightOn: boolean;
  lightIntensity: number;
  temperature: Temperature;
}

export default function LedManagement() {
  const [lightState, setLightState] = useState<lightState>({
    isLightOn: false,
    lightIntensity: 0,
    temperature: Temperature.K4,
  });

  const handleTemperature = useCallback((value: Temperature): void => {
    setLightState((prev) => ({ ...prev, temperature: value }));
  }, [])
  
  const updatelightIntensity = useCallback((value: number): void => {
    setLightState((prev) => ({ ...prev, lightIntensity: value }));
    setLightState((prev) => ({ ...prev, isLightOn: true }));
  }, []);

  const handleLightOff = useCallback((): void => {
    setLightState((prev) => ({ ...prev, isLightOn: false }));
    setLightState((prev) => ({ ...prev, lightIntensity: 0 }));
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='dark' />

      <View style={styles.ledContainer}>
        <ImageBackground source={office} imageStyle={{ opacity: lightState.lightIntensity / (MAX_LIGHT_INTENSITY * 10) }} style={styles.background}>
          <Image style={styles.led} source={led} />
          <Image source={light} style={[styles.lightBackground, { opacity: (lightState.lightIntensity / MAX_LIGHT_INTENSITY) - handleLightingTemperature(lightState.temperature) }]} />
        </ImageBackground>
      </View>

      <Text style={styles.title}>Toggled Lighting Control</Text>
      <View style={styles.controlContainer}>
        <Text style={styles.textStyle}>Power and Dimming</Text>
        <View style={styles.powerControlContainer}>
          <PowerControlCard label="ON" isActive={lightState.isLightOn} onPress={() => lightState.isLightOn ? null : updatelightIntensity(MAX_LIGHT_INTENSITY)} />
          <PowerControlCard label="OFF" isActive={!lightState.isLightOn} onPress={handleLightOff} />
        </View>
        <Text style={styles.textStyle}>Dim Light</Text>
        <Slider
          style={styles.sliderStyle}
          minimumValue={0}
          maximumValue={MAX_LIGHT_INTENSITY}
          minimumTrackTintColor="#3A7DA3"
          maximumTrackTintColor="#EBE7E7"
          onValueChange={updatelightIntensity}
          value={lightState.lightIntensity}
          thumbTintColor='#3A7DA3'
          trackStyle={styles.trackStyle}
          thumbStyle={styles.thumbStyle}
        />
        <Text style={styles.textStyle}>Temperature</Text>
        <View style={styles.temperatureContainer}>
          <TemperatureCard name={TEMPERATURE_K4} value={Temperature.K4} selectedTemperature={lightState.temperature} onSelect={handleTemperature} />
          <TemperatureCard name={TEMPERATURE_K5} value={Temperature.K5} selectedTemperature={lightState.temperature} onSelect={handleTemperature} />
          <TemperatureCard name={TEMPERATURE_K65} value={Temperature.K65} selectedTemperature={lightState.temperature} onSelect={handleTemperature} />
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
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 10,
    alignSelf: 'flex-start',
    color: '#000000',
    marginLeft: 30,
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
  controlContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: '3%',
    marginLeft: 30,
    width: '100%',
  },
  temperatureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignItems: 'flex-start',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: '4%',
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
  textStyle: {
    color: '#A6A6A6',
    fontSize: 14,

  },
  powerControlContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '80%',
    height: '15%',
    alignItems: 'flex-start',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    marginTop: '3%',
    marginBottom: '3%',
  },
  thumbStyle: {
    width: '5%',
    height: '70%',
    borderRadius: 4,
    backgroundColor: 'white',
    borderColor: '#3A7DA3',
    borderWidth: 1
  },
  trackStyle: {
    width: '100%',
    height: '50%',

  },
  sliderStyle: {
    width: '80%',
    height: 40,
    alignSelf: 'flex-start',
    borderRadius: 4,
  }
});

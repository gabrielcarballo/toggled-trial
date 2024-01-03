import React, { useCallback, useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { handleLightingTemperature, Temperature } from '../../utils/handleLightingTemperature'
import { Slider } from '@rneui/themed'
import TemperatureCard from './components/TemperatureCard';


const office = require('../../assets/office.jpg');
const led = require('../../assets/horizontal-led-f.png');
const light = require('../../assets/lighted-bg.png');



export default function LedManagement() {
  const [lightIntensity, setlightIntensity] = useState<number>(0);
  const [temperature, setTemperature] = useState<Temperature>(Temperature.K4);
  const [isLightOn, setIsLightOn] = useState<boolean>(false);

  const updatelightIntensity = useCallback((value: number): void => {
    console.log(lightIntensity);
    setlightIntensity(value);
    setIsLightOn(true);
  }, []);

  const handleLightOff = useCallback((): void => {
    console.log(lightIntensity);
    setIsLightOn(false);
    setlightIntensity(0);
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='dark' />

      <View style={styles.ledContainer}>
        <ImageBackground source={office} imageStyle={{ opacity: lightIntensity / 2550 }} style={styles.background}>
          <Image style={styles.led} source={led} />
          <Image source={light} style={[styles.lightBackground, { opacity: (lightIntensity / 255) - handleLightingTemperature(temperature) }]} />
        </ImageBackground>
      </View>

      <Text style={styles.title}>Toggled Lighting Control</Text>
      <View style={styles.controlContainer}>
        <Text style={styles.textStyle}>Power and Dimming</Text>
        <View style={styles.powerControl}>
          <Pressable onPress={() => isLightOn ? null : updatelightIntensity(255)}>
            <View style={[styles.powerControlCard, isLightOn === true ? styles.selectedCard : null]}>
              <Text style={isLightOn ? styles.selectedTitle : styles.temperatureTitle}>ON</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handleLightOff()}>
            <View style={[styles.powerControlCard, isLightOn === false ? styles.selectedCard : null]}>
              <Text style={isLightOn === false ? styles.selectedTitle : styles.temperatureTitle}>OFF</Text>
            </View>
          </Pressable>
        </View>
        <Text style={styles.textStyle}>Dim Light</Text>
        <Slider
          style={{ width: '80%', height: 40, alignSelf: 'flex-start' }}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#3A7DA3"
          maximumTrackTintColor="#EBE7E7"
          onValueChange={updatelightIntensity}
          value={lightIntensity}
          thumbTintColor='#3A7DA3'
          trackStyle={{ width: '100%', height: '50%', borderRadius: 0 }}
          thumbStyle={{ width: '5%', height: '70%', borderRadius: 0, backgroundColor: 'white', borderColor: '#3A7DA3', borderWidth: 1 }}
        />
        <Text style={styles.textStyle}>Temperature</Text>
        <View style={styles.temperatureContainer}>
          <TemperatureCard  name='4000' value={Temperature.K4} selectedTemperature={temperature} onSelect={setTemperature as (value: Temperature) => void} />
          <TemperatureCard name='5000'value={Temperature.K5} selectedTemperature={temperature} onSelect={setTemperature as (value: Temperature) => void} />
          <TemperatureCard name='6500'value={Temperature.K65} selectedTemperature={temperature} onSelect={setTemperature as (value: Temperature) => void} />
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
  
  selectedCard: {
    backgroundColor: '#3A7DA3',
  },
  temperatureTitle: {
    color: '#3A7DA3',
  },
  selectedTitle: {
    color: '#FFFFFF',
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
  powerControl: {
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
  powerControlCard: {
    height: 40,
    width: 85,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#3A7DA3',
    borderWidth: 1,
  },
});

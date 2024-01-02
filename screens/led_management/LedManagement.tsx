import React, { useCallback, useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, ImageBackground } from 'react-native';
import Slider from '@react-native-community/slider'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { handleLightingTemperature, Temperature } from '../../utils/handleLightingTemperature'
import { Slider as NewSlider} from '@rneui/themed'


const office = require('../../assets/office.jpg');
const led = require('../../assets/horizontal-led-f.png');
const light = require('../../assets/lighted-bg.png');



export default function LedManagement() {
  const [lightIntensity, setlightIntensity] = useState<number>(0);
  const [temperature, setTemperature] = useState<Temperature>(Temperature.K4);

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
      <View style={styles.controlContainer}>
        <Text style={styles.textStyle}>Dim Light</Text>
        <Slider
          style={{ width: '80%', height: 40, alignSelf: 'flex-start' }}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#3A7DA3"
          maximumTrackTintColor="#A6A6A6"
          onValueChange={updatelightIntensity}
          value={lightIntensity}
          thumbTintColor='#3A7DA3'
        />
        <NewSlider
          style={{ width: '80%', height: 40, alignSelf: 'flex-start' }}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#3A7DA3"
          maximumTrackTintColor="#A6A6A6"
          onValueChange={updatelightIntensity}
          value={lightIntensity}
          thumbTintColor='#3A7DA3'
          trackStyle={{ width: '100%', height: '50%', borderRadius: 0 }}
          thumbStyle={{ width: '5%', height: '70%', borderRadius: 0, backgroundColor: 'white', borderColor: '#3A7DA3', borderWidth: 1 }}
        />
        <Text style={styles.textStyle}>Temperature</Text>

        <View style={styles.temperatureContainer}>
          <Pressable onPress={() => setTemperature(Temperature.K4)}>
            <View style={[styles.temperatureCard, temperature === Temperature.K4 ? styles.selectedTemperatureCard : null]}>
              <Text style={temperature === Temperature.K4 ? styles.selectedTemperatureTile : styles.temperatureTitle}>4000K</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setTemperature(Temperature.K5)}>
            <View style={[styles.temperatureCard, temperature === Temperature.K5 ? styles.selectedTemperatureCard : null]}>
              <Text style={temperature === Temperature.K5 ? styles.selectedTemperatureTile : styles.temperatureTitle}>5000K</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setTemperature(Temperature.K65)}>
            <View style={[styles.temperatureCard, temperature === Temperature.K65 ? styles.selectedTemperatureCard : null]}>
              <Text style={temperature === Temperature.K65 ? styles.selectedTemperatureTile : styles.temperatureTitle}>6500K</Text>
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
    marginTop: 20,
    marginLeft: 30,
    
  },
  temperatureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '72%',
    alignItems: 'flex-start',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: '4%',
  },
  temperatureCard: {
    height: 40,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#3A7DA3',
    borderWidth: 1,
  },
  selectedTemperatureCard: {
    backgroundColor: '#3A7DA3',
  },
  temperatureTitle: {
    color: '#3A7DA3',
  },
  selectedTemperatureTile: {
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
});

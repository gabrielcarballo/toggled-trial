import { Pressable, StyleSheet, Text, View } from "react-native";
import { Temperature } from "../../../utils/handleLightingTemperature";

interface TemperatureCardProps {
  name: string;
  value: string;
  selectedTemperature: string;
  onSelect: (value: Temperature) => void;
}


const TemperatureCard = ({ name, value, selectedTemperature, onSelect }: TemperatureCardProps) => {
  return (
      <Pressable onPress={() => onSelect(value as Temperature)}>
        <View style={[styles.temperatureCard, selectedTemperature === value ? styles.selectedCard : null]}>
          <Text style={selectedTemperature === value ? styles.selectedTitle : styles.temperatureTitle}>{name}K</Text>
        </View>
      </Pressable>
    );
}

const styles = StyleSheet.create({
  temperatureCard: {
    height: 40,
    width: 85,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#3A7DA3',
    borderWidth: 1,
    borderRadius: 4,
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
});

export default TemperatureCard;
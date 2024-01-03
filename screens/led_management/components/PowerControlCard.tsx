import { Text, View, Pressable, StyleSheet } from 'react-native';

interface PowerControlCardProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
}

const PowerControlCard = ({onPress, isActive, label}: PowerControlCardProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.powerControlCard, isActive ? styles.selectedCard : null]}>
        <Text style={isActive ? styles.selectedTitle : styles.temperatureTitle}>{label}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  powerControlCard: {
    height: 40,
    width: 85,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#3A7DA3',
    borderWidth: 1,
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

export default PowerControlCard;
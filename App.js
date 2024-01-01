import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import HomeScreen  from './screens/home';

export default function App() {
  return (
    <View>
      <StatusBar style="light" />
      <HomeScreen />
    </View>
  );
}



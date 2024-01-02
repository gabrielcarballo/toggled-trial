import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import HomeScreen from './screens/home';
import Routes from './routes';

export default function App() {
  return (
    <Routes>
      <SafeAreaView>
        <StatusBar style="light" />
        <HomeScreen />
      </SafeAreaView>
    </Routes >

  );
}



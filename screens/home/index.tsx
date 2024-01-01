import { View, Text, ImageBackground} from 'react-native';

const HomeScreen = () => {
  return (
    <>
      <ImageBackground source={require('../../assets/Toggled-homescreen.jpeg')} style={{width: '100%', height: '100%'}} />
    </>
  )
}

export default HomeScreen;
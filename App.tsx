import { NavigationContainer } from '@react-navigation/native';
import RouteHandler from './src/router/router';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'sora-regular': require('./assets/fonts/Sora/static/Sora-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <RouteHandler/>
    </NavigationContainer>
  );
}

import { NavigationContainer } from '@react-navigation/native';
import RouteHandler from './src/router/router';
// import './global.css';

export default function App() {
  return (
    <NavigationContainer>
      <RouteHandler/>
    </NavigationContainer>

  );
}

import { StatusBar } from 'expo-status-bar';
import { styledContainer } from './src/styles/components/container'
import { View } from 'react-native';
import { Home } from './src/views/index'

export default function App() {
  return (
    <View style={styledContainer}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}
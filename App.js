import { StatusBar } from 'expo-status-bar';
import { 
  View,
  StyleSheet
} from 'react-native';
import { theme } from './src/constants/theme/Theme';
import { Home } from './src/views/index'

const App = () => {
  return (
    <View style={styles.view}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: theme.colors.dark.surface,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App
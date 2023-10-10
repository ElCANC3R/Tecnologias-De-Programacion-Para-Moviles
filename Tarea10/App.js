import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavigateScreen from './src/components/screens/NavigateScreen';
import { AuthContextProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <AuthContextProvider>
    <View style={styles.container}>
      <NavigateScreen />
      <StatusBar style="auto" />
    </View>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavigateScreen from './src/components/screens/NavigateScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigateScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

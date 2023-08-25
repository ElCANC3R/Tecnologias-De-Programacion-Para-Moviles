import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Touchable, TouchableHighlight } from 'react-native';
import { StyleText } from '../src/components/StyledText';



export default function App() {
  return (
    <View style={styles.container}>
      <Text style_={styles.text} >Rukia tiene el mejor Bankai de Bleach!</Text>
      <StyleText text="Custom Style Text" fontSize= {20} fontWeight='Bold' color="red"/>
      <TouchableHighlight onPress={() => alert('Hello, world!')}>
        <Text>Press me!</Text>
      </TouchableHighlight>
      <StatusBar style="dark" />
    </View>
  );
}

const Card = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.body}>{props.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { 
    color: 'red',
    fontSize: 20,
  },
});

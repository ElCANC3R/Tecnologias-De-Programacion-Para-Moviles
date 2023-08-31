import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/login';

const DATA = [
  {id: 0, name: 'Diego', lastName: 'Ruiz'} ,
  {id: 1, name: 'Arturo', lastName: 'Reyes'} ,
  {id: 2, name: 'Juan', lastName: 'Perez'} ,
  {id: 3, name: 'Pedro', lastName: 'Garcia'} ,
  {id: 4, name: 'Maria', lastName: 'Lopez'} ,
  {id: 5, name: 'Luis', lastName: 'Gonzalez'} ,
]

export default function App() {
  return (
    <ScrollView style={styles.container}>
     {/* <Login></Login>*/ }

     {DATA.map(({item, index}) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.text}>{item.name} {item.lastName}</Text>
        </View>
       
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{

    borderWidth: 1,
    borderColor: index % 2 === 0 ? 'red' : 'blue',
  },
  text:{
    fontSize: 40,
  }
});

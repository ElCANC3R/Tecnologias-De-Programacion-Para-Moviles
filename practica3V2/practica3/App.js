import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Dimensions, TextInput, ScrollView } from 'react-native';
import CustomPerson from './src/components/person/person';
//import Login from './src/screens/Login';


export default function App() {
  const DATA = [
    { id: '1', name: 'Diego', lastName: 'Ruiz' },
    { id: '2', name: 'Keka', lastName: 'Galindo' },
    { id: '3', name: 'Rolando', lastName: 'Mota' },
    { id: '4', name: 'Laura', lastName: 'Bozo' },
    { id: '5', name: 'Ben', lastName: 'Dover' },
    { id: '6', name: 'Anita', lastName: 'Bath' },
    { id: '7', name: 'Al', lastName: 'Coholic' },
    { id: '8', name: 'Seymour', lastName: 'Butts' },
    { id: '9', name: 'Ivana', lastName: 'Tinkle' },
    { id: '10', name: 'Mike', lastName: 'Rotch' },
    { id: '11', name: 'Eileen', lastName: 'Dover' },
    { id: '12', name: 'Ollie', lastName: 'Tabooger' },
  ];
  

  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <FlatList
        data={DATA}
        renderItem={({ item: { name, lastName }, index }) => (
          
          <CustomPerson
            name={name}
            lastName={lastName}
            index={index}
          />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={<Text style={{width:'100%', textAlign: 'center'}}>-----------------------------------------------------------------------------------</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 33,
  }
});
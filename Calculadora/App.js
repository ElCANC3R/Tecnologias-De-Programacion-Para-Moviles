import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Number from './src/components/Number';
import { useReducer } from 'react';


const initialState = {
  displayNumber: 0,
  operator: '',
  result: '',
  currentNumber: '',
  previousNumber: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'number':
      return {
        ...state,
        displayNumber: action.payload,
        currentNumber: action.payload,
      }
    case 'operator':
      return {
        ...state,
        operator: action.payload,
      }
    case 'result':
      return {
        ...state,
        
      }
    case 'clear':
      return {
        ...state,
        displayNumber: 0,
      }
    default:
      return state
  }
}

export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSelectNumber = (number) => {
    dispatch({ type: 'number', payload: number })
  }

  const handleSelectOperator = (operator) => {
    dispatch({ type: 'operator', payload: operator })
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>{state.currentNumber + state.operator + state.previousNumber}</Text>
      </View>
      <View style={styles.row}>
        <Text>{state.displayNumber}</Text>
      </View>
      <View style={styles.row}>
        <Number text={1} role={'number'} onPress={() => handleSelectNumber} />
        <Number text={2} role={'number'} onPress={() => handleSelectNumber} />
        <Number text={3} role={'number'} onPress={() => handleSelectNumber} />
        <Number text={'+'} role={'operator'} onPress={() => handleSelectOperator} />
      </View>
      <View style={styles.row}>
        <Number text={4} role={'number'} onPress={() => handleSelectNumber} />
        <Number text={5} role={'number'} onPress={() => handleSelectNumber} />
        <Number text={6} role={'number'} onPress={() => handleSelectNumber} />
        <Number text={'-'} role={'operator'} onPress={() => handleSelectOperator} />
      </View>
      <View style={styles.row}>
        <Number text={7} role={'number'} onPress={() => handleSelectNumber} />
        <Number text={8} role={'number'} onPress={() => handleSelectNumber} />
        <Number text={9} role={'number'} onPress={() => handleSelectNumber} />
        <Number text={'*'} role={'operator'} onPress={() => handleSelectOperator} />
      </View>
      <View style={styles.row}>
        <Number text={'C'} role={'operator'} onPress={() => handleSelectNumber} />
        <Number text={0} role={'number'} onPress={() => handleSelectNumber} />
        <Number text={'='} role={'calculate'} onPress={() => handleSelectNumber} />
        <Number text={'/'} role={'operator'} onPress={() => handleSelectOperator} />
      </View>
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  }
});

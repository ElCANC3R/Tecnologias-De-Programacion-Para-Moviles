import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

const CALCULATOR_TYPES = {
  SELECT_NUMBER: "SELECT_NUMBER",
  SELECT_OPERATOR: "SELECT_OPERATOR",
  SELECT_ACTION: "SELECT_ACTION",
  CALCULATE: "CALCULATE",
};

const initialState = {
  displayNumber: 0,
  operator: "",
  prevNumber: 0,
  currentNumber: 0,
  action: "",
  result: 0,
};

const init = (initialState) => {
  return initialState;
};

const reducer = (state, action) => {
  switch (action.type) {
    case CALCULATOR_TYPES.SELECT_NUMBER:
      return {
        ...state,
        currentNumber:
          state.currentNumber.toString() + action.payload.toString(),
        result: 0,
        displayNumber: 0,
      };
    case CALCULATOR_TYPES.SELECT_OPERATOR:
      if (state.result == 0) {
        return {
          ...state,
          operator: action.payload,
          prevNumber: state.currentNumber,
          currentNumber: "",
          displayNumber: 0,
        };
      }
      else {
        return {
          ...state,
          operator: action.payload,
          prevNumber: state.result,
          currentNumber: "",
          result: 0,
          displayNumber: 0,
        };
      }

      case CALCULATOR_TYPES.CALCULATE:
        switch (state.operator) {
          case "+":
            return {
              ...state,
              displayNumber: parseFloat(state.prevNumber) + parseFloat(state.currentNumber),
              result: parseFloat(state.prevNumber) + parseFloat(state.currentNumber),
            };
          case "-":
            return {
              ...state,
              displayNumber: parseFloat(state.prevNumber) - parseFloat(state.currentNumber),
              result: parseFloat(state.prevNumber) - parseFloat(state.currentNumber),
            };
          case "x":
            return {
              ...state,
              displayNumber: parseFloat(state.prevNumber) * parseFloat(state.currentNumber),
              result: parseFloat(state.prevNumber) * parseFloat(state.currentNumber),
            };
          case "/":
            return {
              ...state,
              displayNumber: parseFloat(state.prevNumber) / parseFloat(state.currentNumber),
              result: parseFloat(state.prevNumber) / parseFloat(state.currentNumber),
            };
          case "%":
            return {
              ...state,
              displayNumber: parseFloat(state.prevNumber) % parseFloat(state.currentNumber),
              result: parseFloat(state.prevNumber) % parseFloat(state.currentNumber),
            };
          default:
            return state;
        }
      
    case CALCULATOR_TYPES.SELECT_ACTION:
      switch (action.payload) {
        case "C":
          return {
            ...state,
            displayNumber: 0,
            operator: "",
            prevNumber: "",
            currentNumber: "",
          };
        case "E":
          return {
            ...state,
            displayNumber: 0,
            currentNumber: "",
          };
        case "R":
          return {
            ...state,
            displayNumber: state.displayNumber * -1,
            currentNumber: state.currentNumber * -1,
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const handleSelectNumber = (number) => {
    dispatch({
      type: CALCULATOR_TYPES.SELECT_NUMBER,
      payload: number,
    });
  };

  const handleSelectOperator = (operator) => {
    dispatch({
      type: CALCULATOR_TYPES.SELECT_OPERATOR,
      payload: operator,
    });
  };

  const handleCalculate = () => {
    dispatch({
      type: CALCULATOR_TYPES.CALCULATE,
    });
  };

  const handleAction = (action) => {
    dispatch({
      type: CALCULATOR_TYPES.SELECT_ACTION,
      payload: action,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTexto}>
        <Text style={styles.text}>
          {state.prevNumber + state.operator + state.currentNumber}
        </Text>
        <Text style={styles.textResult}>{"= " + state.displayNumber}</Text>
      </View>
      <View style={styles.row}>
        <Button
          text={"C"}
          role={"operator"}
          onPress={() => {
            handleAction("C");
          }}
        />
        <Button
          text={"E"}
          role={"operator"}
          onPress={() => {
            handleAction("E");
          }}
        />
        <Button
          text={"%"}
          role={"operator"}
          onPress={() => {
            handleSelectOperator("%");
          }}
        />
        <Button
          text={"/"}
          role={"operator"}
          onPress={() => {
            handleSelectOperator("/");
          }}
        />
      </View>
      <View style={styles.row}>
        <Button
          text={7}
          role={"number"}
          onPress={() => {
            handleSelectNumber(7);
          }}
        />
        <Button
          text={8}
          role={"number"}
          onPress={() => {
            handleSelectNumber(8);
          }}
        />
        <Button
          text={9}
          role={"number"}
          onPress={() => {
            handleSelectNumber(9);
          }}
        />
        <Button
          text={"X"}
          role={"operator"}
          onPress={() => {
            handleSelectOperator("x");
          }}
        />
      </View>
      <View style={styles.row}>
        <Button
          text={4}
          role={"number"}
          onPress={() => {
            handleSelectNumber(4);
          }}
        />
        <Button
          text={5}
          role={"number"}
          onPress={() => {
            handleSelectNumber(5);
          }}
        />
        <Button
          text={6}
          role={"number"}
          onPress={() => {
            handleSelectNumber(6);
          }}
        />
        <Button
          text={"-"}
          role={"operator"}
          onPress={() => {
            handleSelectOperator("-");
          }}
        />
      </View>
      <View style={styles.row}>
        <Button
          text={1}
          role={"number"}
          onPress={() => {
            handleSelectNumber(1);
          }}
        />
        <Button
          text={2}
          role={"number"}
          onPress={() => {
            handleSelectNumber(2);
          }}
        />
        <Button
          text={3}
          role={"number"}
          onPress={() => {
            handleSelectNumber(3);
          }}
        />
        <Button
          text={"+"}
          role={"operator"}
          onPress={() => {
            handleSelectOperator("+");
          }}
        />
      </View>
      <View style={styles.row}>
        <Button
          text={"R"}
          role={"operator"}
          onPress={() => {
            handleAction("R");
          }}
        />
        <Button
          text={0}
          role={"number"}
          onPress={() => {
            handleSelectNumber(0);
          }}
        />
        <Button
          text={"."}
          role={"number"}
          onPress={() => {
            handleSelectNumber(".");
          }}
        />
        <Button text={"="} role={"operator"} onPress={handleCalculate} />
      </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    color: "#ffff",
    fontSize: 30,
  },
  textResult: {
    color: "#ffff",
    fontSize: 50,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  containerTexto: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    height: "20%",
    backgroundColor: "#000000",
    borderRadius: 10,
    padding: 20,
  },
});

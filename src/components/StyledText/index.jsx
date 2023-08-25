import { Text, StyleSheet } from "react-native"

export const StyleText = ({text, fontSize, fontWeight, color}) => {
    return (
        <Text style={{fontSize, fontWeight, color}}> {text} </Text>
    )
}

const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold'
    }
})
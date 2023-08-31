import React from 'react'
import { View, Text, TextInput, StyleSheet , Image} from 'react-native'

const CustomPerson = ({ name, lastName, index }) => {
    return (
        <View
            style={{
                backgroundColor: index % 2 === 0 ? '#6C2414' : '#1986A3',
                width: 350,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                flexDirection:'row',
               
            }}
        >
            <View 
                style={{marginRight: 50}}    
            >
                <Image 
                    style={styles.imagen} source={require('../../../assets/google.png')}
                >

                </Image>
            </View>
            <View>
                <Text
                    style={{
                        color: index % 2 === 0 ? '#fff' : '#7CD731',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>{name}</Text>
                <Text
                    style={{
                        color: index % 2 === 0 ? '#fff' : '#7CD731',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>{lastName}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imagen: {
      height: 50,
      width: 50,

    }
  });

export default CustomPerson
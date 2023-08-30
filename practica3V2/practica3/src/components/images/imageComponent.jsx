import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const ImageButton = ({ source, texto }) => {
    return (
        <TouchableOpacity style={styles.touch}>
            <Image style={styles.image} source={source} />
            <Text>{texto}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
      },
      touch: {
        paddingHorizontal: 50,

        },
});

export default ImageButton;

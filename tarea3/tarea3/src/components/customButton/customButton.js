import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Image, Dimensions } from 'react-native';

const CustomButton = ({ onPress, title, buttonStyle, textStyle, imageSource, ...restProps }) => {
  const [showImage, setShowImage] = useState(false);

  const handleImagePress = () => {
    setShowImage(false); 
  };

  const handleButtonPress = () => {
    setShowImage(true); 
    onPress(); 
  };

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View>
      <TouchableOpacity onPress={handleButtonPress} style={[styles.button, buttonStyle]} {...restProps}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </TouchableOpacity>
      {showImage && (
        <TouchableOpacity onPress={handleImagePress}>
          <Image source={imageSource} style={{ width: windowWidth, height: windowHeight }} resizeMode="contain" />
        </TouchableOpacity>
      )}
    </View>
  );
};



const styles = {
  button: {
    backgroundColor: '#FF4500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    
    color: 'purple',
    fontSize: 16,
  },
};

export default CustomButton;

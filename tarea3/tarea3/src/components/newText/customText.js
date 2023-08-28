
import React from 'react';
import { Text } from 'react-native';

const CustomText = ({ style, children, ...restProps }) => {
  return (
    <Text style={[styles.defaultStyle, style]} {...restProps}>
      {children}
    </Text>
  );
};

const styles = {
  defaultStyle: {
    fontSize: 16,
    color: 'green',
  },
};

export default CustomText;

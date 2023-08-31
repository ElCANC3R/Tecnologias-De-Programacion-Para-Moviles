import { StyleSheet, Text, View } from 'react-native';
import LoginHeader from '../components/Login/LoginHeader';
import LoginContent from '../components/Login/LoginContent';

export default function Login() {

  return (
    <View style={styles.container}>
     <LoginHeader></LoginHeader>
     <LoginContent></LoginContent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },

});


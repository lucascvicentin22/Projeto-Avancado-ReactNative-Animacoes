import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Animacao01 from './components/Animacao01';
import Animacao02 from './components/Animacao02';
import Animacao03 from './components/Animacao03';

export default function App() {
  return (
    <View style={styles.container}>
      <Animacao03 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

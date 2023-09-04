import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HeaderWithLeftIcon from './app/header';
import InspectionPage from './app/inspection';
import Navigation from './app/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderWithLeftIcon
      title="Inspection Form"
      leftIconSource={require('./assets/left.png')}
      />
      <View style={styles.body}>
        <InspectionPage />
        <Navigation></Navigation>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    paddingTop: 10,
  }
});

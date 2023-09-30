import { StatusBar } from 'expo-status-bar';
import Router from './src/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider >
      <Router/>
      <StatusBar style='auto' />
    </SafeAreaProvider>
  );
}



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Inter_900Black, Inter_500Medium, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter';
import Dashboard from './src/screens/Dashboard';
import DrugstockCreditOne from './drugstoc_credit_one';
import DrugstockCreditThree from './drugstoc_credit_three';
import DrugstockCreditTwo from './drugstoc_credit_two';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_400Regular
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <DrugstockCreditOne/>
    </SafeAreaProvider>
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

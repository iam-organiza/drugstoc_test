import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, Inter_900Black, Inter_500Medium, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import OrganizerApp from "./OrganizerApp";
import Dashboard from './src/screens/Dashboard';
import DrugstockCreditOne from './src/screens/drugstoc_credit_one';
import DrugstockCreditThree from './src/screens/drugstoc_credit_three';
import DrugstockCreditTwo from './src/screens/drugstoc_credit_two';
import SecureScreenOne from './src/screens/Secure_Screen_One';
import SecureScreenTwo from './src/screens/Secure_Screen_Two';
import SecureScreenThree from './src/screens/Secure_Screen_Three';
import SecureScreenFour from './src/screens/Secure_Screen_Four';
import SecureScreenEight from './src/screens/Secure_Screen_Eight';
import SecureScreenNine from './src/screens/Secure_Screen_Nine';
import SecureScreenTen from './src/screens/Secure_Screen_Ten';
import SecureScreenFive from './src/screens/Secure_Screen_Five';
import SecureScreenSix from './src/screens/Secure_Screen_Six';
import SecureScreenSeven from './src/screens/Secure_Screen_Seven';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './src/navigators/BottomNavigation';
import GoBack from './src/components/GoBack/GoBack';

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
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <SafeAreaProvider style={{ width: "100%", height: "100%", backgroundColor: "#FFF" }}>
          {/* <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: "#FFF" }}> */}

            {/* <SecureScreenOne /> */}
            {/* <SecureScreenEight /> */}
            {/* <SecureScreenNine /> */}
            {/* <SecureScreenTen /> */}



            <Stack.Navigator>
              <Stack.Screen
                name="BottomNavigation"
                component={BottomNavigation}
                options={{ headerShown: false }}
              />

              <Stack.Screen name="DrugstockCreditOne" component={DrugstockCreditOne} 
                options={{
                  header: ({navigation}) => {
                    return <GoBack navigation={navigation} />
                  } 
                }}/>
              
              <Stack.Screen name="DrugstockCreditTwo" component={DrugstockCreditTwo} 
                options={{
                  headerShown: false
                }}/>
              
              <Stack.Screen name="DrugstockCreditThree" component={DrugstockCreditThree} 
                options={{
                  headerShown: false
                }}/>
              
              <Stack.Screen name="SecureScreenOne" component={SecureScreenOne} 
                options={{
                  header: ({navigation}) => {
                    return <GoBack navigation={navigation} title="Security" close={true} back={false} />
                  }
                }}/>
              
              <Stack.Screen name="SecureScreenTwo" component={SecureScreenTwo} 
                options={{
                  header: ({navigation}) => {
                    return <GoBack navigation={navigation} title="Security" close={false} back={true} />
                  }
                }}/>
              
              <Stack.Screen name="SecureScreenThree" component={SecureScreenThree} 
                options={{
                  header: ({navigation}) => {
                    return <GoBack navigation={navigation} title="Security" close={true} back={false} />
                  }
                }}/>
              
              <Stack.Screen name="SecureScreenFour" component={SecureScreenFour} 
                options={{
                  header: ({navigation}) => {
                    return <GoBack navigation={navigation} title="Security" close={false} back={true} />
                  }
                }}/>
              
              <Stack.Screen name="SecureScreenFive" component={SecureScreenFive} 
                options={{
                  headerShown: false
                }}/>
              
              <Stack.Screen name="SecureScreenSix" component={SecureScreenSix} 
                options={{
                  headerShown: false
                }}/>
              
              <Stack.Screen name="SecureScreenSeven" component={SecureScreenSeven} 
                options={{
                  header: ({navigation}) => {
                    return <GoBack navigation={navigation} title="Security" close={true} back={false} />
                  }
                }}/>
              
              <Stack.Screen name="SecureScreenEight" component={SecureScreenEight} 
                options={{
                  header: ({navigation}) => {
                    return <GoBack navigation={navigation} title="Security" close={false} back={true} />
                  }
                }}/>
              
              <Stack.Screen name="SecureScreenNine" component={SecureScreenNine} 
                options={{
                  header: ({navigation}) => {
                    return <GoBack navigation={navigation} title="Security" close={false} back={false} />
                  }
                }}/>
              
              <Stack.Screen name="SecureScreenTen" component={SecureScreenTen} 
                options={{
                  header: ({navigation}) => {
                    return <GoBack navigation={navigation} title="Security" close={true} back={false} />
                  }
                }}/>
            </Stack.Navigator>
          {/* <OrganizerApp /> */}
          {/* </SafeAreaView> */}
        </SafeAreaProvider>
      </View>
    </NavigationContainer>
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

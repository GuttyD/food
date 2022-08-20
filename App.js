import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import DetailsScreen from './src/screens/DetailsScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="auto"/>

        <Stack.Navigator initialRouteName="SearchScreen">
          <Stack.Screen name="SearchScreen" component={SearchScreen}
          options={{
            title: 'Business Search',
            headerTitleAlign:'center'
          }}
          />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
        </Stack.Navigator>

    </NavigationContainer>
  );
}

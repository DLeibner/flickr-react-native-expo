import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from "./src/components/Home";
import Details from "./src/components/Details";
import { PhotoDefinition } from './src/types/PhotoClass';

export type RootStackParamList = {
  Home: undefined;
  Details: {item: PhotoDefinition };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() : JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'Flickr Search'}} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
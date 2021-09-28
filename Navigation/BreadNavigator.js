import BreadDetailScreen from '../Screens/BreadDetailScreen';
import CartScreen from '../Screens/CartScreen';
import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryBreadScreen from '../Screens/CategoryBreadScreen';
import { Colors } from '../constants/Colors';
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ROUTES = {
  HOME: 'Home',
}
const BreadNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator 
    initialRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',          
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        headerTitleStyle: {
          fontWeight: 'bold',          
        }        
      }}
    >     
      <Stack.Screen
        name={ROUTES.HOME}  
        component={CategoriesScreen}
        options={{
          title: "Nuestra Panadería",
          headerStyle: { backgroundColor: Colors.accentColor }, 
        }}
      ></Stack.Screen>
    <Stack.Screen
        name="Products"
        component={CategoryBreadScreen}
        options={({route}) => ({
          title: route.params.name,
          headerStyle: { backgroundColor: route.params.headerStyle }, 
        })}
      ></Stack.Screen>
    <Stack.Screen 
        name="Detail"
        component={BreadDetailScreen}
        options={({route}) => ({
          title: route.params.name,
          
        })}
      ></Stack.Screen>
      <Stack.Screen
        name='Cart'
        component={CartScreen}
        options={{title: 'Carrito'}}
      ></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);

export default BreadNavigator;

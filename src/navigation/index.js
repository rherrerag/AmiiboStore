import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../features/products/containers/ProductsHome';
import ProductDetailScreen from '../features/products/containers/ProductDetail';
import ShoppingCartScreen from '../features/cart/containers/Cart';
import SuccessScreen from '../features/success/containers/Success';
import ErrorScreen from '../features/error/containers/Error';

const Stack = createStackNavigator();

const AppStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Detail" component={ProductDetailScreen} />
    <Stack.Screen name="Cart" component={ShoppingCartScreen} />
    <Stack.Screen name="Success" component={SuccessScreen} />
    <Stack.Screen name="Error" component={ErrorScreen} />
  </Stack.Navigator>
);

export default AppStackNavigator;

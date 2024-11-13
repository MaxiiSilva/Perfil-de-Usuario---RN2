import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '/rn2/my-app/app/(tabs)/index';
import Login from '/rn2/my-app/app/(tabs)/Login';
import GoogleAuthScreen from '/rn2/my-app/app/googleAuth';
import FacebookAuthScreen from '/rn2/my-app/app/facebookAuth';
import ProfileScreen from '/rn2/my-app/app/(tabs)/profileScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  Login: undefined;
  GoogleAuth: undefined;
  FacebookAuth: undefined;
  ProfileScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            textAlign: 'center',
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="GoogleAuth" component={GoogleAuthScreen} />
        <Stack.Screen name="FacebookAuth" component={FacebookAuthScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
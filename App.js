import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator> */}
      <BottomTab />
    </NavigationContainer>
  );
};

const BottomTab = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      tabBarOptions={{
        activeTintColor: 'goldenrod',
        inactiveTintColor: 'lightslategrey',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            const size = focused ? 28 : 22;
            return <Icon size={size} color={color} name="home" />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            const size = focused ? 28 : 22;
            return <Icon name="account" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default App;

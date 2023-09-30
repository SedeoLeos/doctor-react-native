import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Home';
import MessageScreen from '../Message';
import SettingScreen from '../Setting';
import { COLORS } from '../../tools/constant';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaInsetsContext, SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaProvider>
      <Tab.Navigator screenOptions={{ headerShown:false,

        tabBarStyle: {
        backgroundColor:COLORS.main
      },}} >
        <Tab.Screen options={{ tabBarIcon:()=><TabIcon name='home'/> }} name='home' component={HomeScreen}/>
        <Tab.Screen name='message' options={{ tabBarIcon:()=><TabIcon name='chatbox'/> }} component={MessageScreen}/>
        <Tab.Screen name='setting' options={{ tabBarIcon:()=><TabIcon name='settings'/> }} component={SettingScreen}/>
      </Tab.Navigator>
    </SafeAreaProvider>

   
  )
}
const TabIcon = ({name})=>{
  return(<Ionicons name={name} size={20}/>)
}
export default BottomTab
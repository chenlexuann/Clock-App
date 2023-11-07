//Chen lexuan
//DIT/FT/1B/05
//p2212562
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();
import StopwatchScreen from './components/StopwatchScreen';
import AlarmStackScreen from './components/AlarmScreen';
import TimerScreen from './components/TimerScreen';

//App
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: {
            fontWeight: '500',
            fontSize: 12,
            margin: 0,
          },
          tabBarStyle: {
            backgroundColor: '#F3F1F1',
            borderTopWidth: 0,
          },
          tabBarIconStyle: { display: 'none' },
          tabBarActiveTintColor: '#0864AA',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        }}>
        <Tab.Screen name="Alarm" component={AlarmStackScreen} />
        <Tab.Screen name="Stopwatch" component={StopwatchScreen} />
        <Tab.Screen name="Timer" component={TimerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

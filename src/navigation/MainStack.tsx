import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screenKeys} from '../constants/screenKeys';
import Home from '../screens/home/Home';
import Lessons from '../screens/lessons/Lessons';
import Tests from '../screens/tests/Tests';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Extras from '../screens/extras/Extras';
import Profile from '../screens/profile/Profile';
import {icons} from '../constants/icons';
import {createStackNavigator} from '@react-navigation/stack';
import {colorKeys} from '../constants/colorKeys';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName={screenKeys.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name={screenKeys.HOME} component={Home} />
    </HomeStack.Navigator>
  );
}

const LessonsStack = createStackNavigator();

function LessonsStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName={screenKeys.LESSONS}
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name={screenKeys.LESSONS} component={Lessons} />
    </HomeStack.Navigator>
  );
}

const TestsStack = createStackNavigator();

function TestsStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName={screenKeys.TESTS}
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name={screenKeys.TESTS} component={Tests} />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      initialRouteName={screenKeys.PROFILE}
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name={screenKeys.PROFILE} component={Profile} />
    </ProfileStack.Navigator>
  );
}

const ExtrasStack = createStackNavigator();

function ExtrasStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName={screenKeys.EXTRAS}
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name={screenKeys.EXTRAS} component={Extras} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  const {DARKRED} = colorKeys;
  return (
    <Tab.Navigator
      initialRouteName={screenKeys.HOME}
      tabBarOptions={{
        activeTintColor: '#651e3e',
      }}>
      <Tab.Screen
        name={screenKeys.HOME}
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={icons.home}
              style={{
                tintColor: color,
                flex: 1,
                marginTop: 10,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={screenKeys.LESSONS}
        component={LessonsStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={icons.learn}
              style={{
                tintColor: color,
                flex: 1,
                marginTop: 10,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={screenKeys.TESTS}
        component={TestsStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={icons.tests}
              style={{
                tintColor: color,
                flex: 1,
                marginTop: 10,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={screenKeys.PROFILE}
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={icons.profile}
              style={{
                tintColor: color,
                flex: 1,
                marginTop: 10,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={screenKeys.EXTRAS}
        component={ExtrasStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={icons.extras}
              style={{
                tintColor: color,
                flex: 1,
                marginTop: 10,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

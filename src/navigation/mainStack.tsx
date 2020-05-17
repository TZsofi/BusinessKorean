import {
  createStackNavigator,
  createBottomTabNavigator,
  TabBarIconProps,
} from 'react-navigation';
import ProfileScreen from '../screens/profile/ProfileScreen';
import FavoritesScreen from '../screens/favorites/FavoritesScreen';
import {Image, StyleSheet, ImageSourcePropType, Text} from 'react-native';
import React from 'react';
import {icons} from '../constants/icons';
import {NewsSearchConnected} from '../screens/news/connect';
import WebViewScreen from '../screens/news/childcomponents/WebViewScreen';
import {ScreenKeys} from '../constants/ScreenKeys';
import {ArticlesConnected} from '../screens/article/connect';
import {FavoritesConnected} from '../screens/favorites/connect';
import {ProfileConnected} from '../screens/profile/connect';
import {EditProfileScreenConnected} from '../screens/editProfile/connect';
import {MapSearchConnected} from '../screens/mapSearch/connect';
import {MapConnected} from '../screens/map/connect';

const MainStack = createStackNavigator(
  {
    [ScreenKeys.Home]: NewsSearchConnected,
    [ScreenKeys.Article]: {
      screen: ArticlesConnected,
      navigationOptions: {
        header: null,
      },
    },
    [ScreenKeys.Web]: WebViewScreen,
  },
  {
    initialRouteName: ScreenKeys.Home,
    headerMode: 'none',
  },
);

const ProfileStack = createStackNavigator({
  [ScreenKeys.Profile]: {
    screen: ProfileConnected,
    navigationOptions: {
      header: null,
    },
  },
  [ScreenKeys.EditProfile]: {
    screen: EditProfileScreenConnected,
    navigationOptions: {
      header: null,
    },
  },
  [ScreenKeys.MapScreen]: {
    screen: MapConnected,
    navigationOptions: {
      title: 'Map',
    },
  },
  [ScreenKeys.MapSearch]: {
    screen: MapSearchConnected,
    navigationOptions: {
      title: 'Map',
    },
  },
  initialRouteName: ScreenKeys.Profile,
  headerMode: 'none',
});

const FavoritesStack = createStackNavigator(
  {
    [ScreenKeys.Favorites]: {
      screen: FavoritesConnected,
      navigationOptions: {
        title: 'Favorites',
      },
    },
    [ScreenKeys.Article]: {
      screen: ArticlesConnected,
      navigationOptions: {
        header: null,
      },
    },
    [ScreenKeys.Web]: WebViewScreen,

    initialRouteName: FavoritesConnected,
    headerMode: 'none',
  },
  {headerLayoutPreset: 'center'},
);

const TabNavigator = createBottomTabNavigator(
  {
    MainStack: {
      screen: MainStack,
      navigationOptions: {
        tabBarLabel: (tabBarIconProps: TabBarIconProps) =>
          renderTabLabel(tabBarIconProps, ScreenKeys.Home),
        tabBarIcon: (tabBarIconProps: TabBarIconProps) =>
          renderTabIcon(tabBarIconProps, icons.tabHome),
      },
    },

    ProfileStack: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: (tabBarIconProps: TabBarIconProps) =>
          renderTabLabel(tabBarIconProps, ScreenKeys.Profile),
        tabBarIcon: (tabBarIconProps: TabBarIconProps) =>
          renderTabIcon(tabBarIconProps, icons.tabProfile),
      },
      initialRouteName: ScreenKeys.Profile,
    },

    FavoritesStack: {
      screen: FavoritesStack,
      navigationOptions: {
        tabBarLabel: (tabBarIconProps: TabBarIconProps) =>
          renderTabLabel(tabBarIconProps, ScreenKeys.Favorites),
        tabBarIcon: (tabBarIconProps: TabBarIconProps) =>
          renderTabIcon(tabBarIconProps, icons.tabFavorites),
      },
    },
  },
  {
    initialRouteName: ScreenKeys.MainStack,
  },
);
const renderTabLabel = (tabBarIconProps: TabBarIconProps, label: string) => {
  const labelStyle = tabBarIconProps.focused
    ? styles.selectedLabel
    : styles.label;
  return <Text style={labelStyle}>{label}</Text>;
};

const renderTabIcon = (
  tabBarIconProps: TabBarIconProps,
  icon: ImageSourcePropType,
) => {
  const iconStyle = tabBarIconProps.focused
    ? styles.selectedImage
    : styles.image;
  return <Image source={icon} style={iconStyle} />;
};
const styles = StyleSheet.create({
  image: {
    tintColor: 'black',
  },
  selectedImage: {
    tintColor: '#ff7a21',
  },
  label: {
    color: 'black',
    fontSize: 12,
    alignSelf: 'center',
  },
  selectedLabel: {
    color: '#ff7a21',
    fontSize: 12,
    alignSelf: 'center',
  },
});
export default TabNavigator;

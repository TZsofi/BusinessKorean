import React from 'react';
import {View, StyleSheet, StatusBar, Image, Text} from 'react-native';
import {colorKeys} from '../../constants/colorKeys';
import LinearGradient from 'react-native-linear-gradient';
import {
  NavigationEventSubscription,
  NavigationState,
  NavigationParams,
  NavigationScreenProp,
} from 'react-navigation';
import {images} from '../../constants/images';
import {TouchableOpacity} from 'react-native-gesture-handler';

export interface ITestsNavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
type testsProps = ITestsNavigationProps;

export default class Tests extends React.Component<testsProps, any> {
  private navListener?: NavigationEventSubscription;

  // A felső sáv kialakítása
  public componentDidMount() {
    this.navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor(colorKeys.RED);
      StatusBar.setTranslucent(false);
    });
  }
  // felső sáv kialakításának vége

  public render() {
    const {DARKBLUE, DARKPUPRPLE, PURPLE, DARKRED, RED} = colorKeys;
    return (
      <View style={{flex: 1}}>
        <LinearGradient
          start={{x: 1, y: 0}}
          colors={[RED, DARKRED, PURPLE, DARKPUPRPLE, DARKBLUE]}>
          <View>
            <Text>TESTS</Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

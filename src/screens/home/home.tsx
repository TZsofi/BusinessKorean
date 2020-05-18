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
import {IHomeProps} from './interface';
import {TouchableOpacity} from 'react-native-gesture-handler';

export interface IHomeNavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
type homeProps = IHomeNavigationProps & IHomeProps;

export default class login extends React.Component<homeProps, any> {
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
            <Text>HOME</Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
  private onPressFacebookButton = () => {
    //TODO
  };
  private onPressLoginButton = () => {
    //TODO
  };
}

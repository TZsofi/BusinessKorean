import React from 'react';
import {View, StyleSheet, StatusBar, Image, Text} from 'react-native';
import {colorKeys} from '../../../constants/colorKeys';
import LinearGradient from 'react-native-linear-gradient';
import {
  NavigationEventSubscription,
  NavigationState,
  NavigationParams,
  NavigationScreenProp,
} from 'react-navigation';
import {images} from '../../../constants/images';
import {ISignInProps} from './interface';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {screenKeys} from '../../../constants/screenKeys';

export interface ISignInNavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
type signInProps = ISignInNavigationProps & ISignInProps;

export default class SignIn extends React.Component<signInProps, any> {
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
    const {
      DARKBLUE,
      DARKPUPRPLE,
      PURPLE,
      DARKRED,
      RED,
      LIGHTPURPLE,
    } = colorKeys;
    const {seoulOutline} = images;
    return (
      <View style={{flex: 1}}>
        <LinearGradient
          start={{x: 1, y: 0}}
          colors={[RED, DARKRED, PURPLE, DARKPUPRPLE, DARKBLUE]}
          style={styles.linearGradient}>
          <View style={styles.container}>
            <Text style={styles.title}>BUSINESS KOREAN</Text>
            <Text>EMAIL</Text>
          </View>
          <View style={styles.seoulImageContainer}>
            <Image source={seoulOutline} style={styles.seoulImage} />
          </View>
        </LinearGradient>
      </View>
    );
  }
}
const {HONEYDEW} = colorKeys;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
  },
  otherText: {
    color: HONEYDEW,
  },
  otherContainer: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000000',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: colorKeys.HONEYDEW,
    height: 28,
    padding: 5,
    paddingLeft: 30,
    paddingRight: 30,
    width: '75%',
  },
  seoulImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  seoulImage: {
    tintColor: HONEYDEW,
    height: 280,
    width: '100%',
    resizeMode: 'stretch',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  title: {
    marginTop: 30,
    fontFamily: 'Giraffey',
    color: HONEYDEW,
    fontSize: 70,
    marginBottom: 120,
  },
  logosAndTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  loginText: {
    color: HONEYDEW,
    marginLeft: 8,
  },
  orText: {
    color: HONEYDEW,
  },
  lineImage: {
    tintColor: HONEYDEW,
    height: 5,
    width: 120,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    resizeMode: 'stretch',
  },
  facebookLogo: {
    height: 40,
    width: 45,
    resizeMode: 'contain',
  },
  googleLogo: {
    height: 40,
    width: 45,
    resizeMode: 'contain',
  },
  orContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
  },
});

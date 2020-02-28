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
import {ILoginProps} from './interface';
import {TouchableOpacity} from 'react-native-gesture-handler';

export interface ILoginNavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
type loginScreenProps = ILoginNavigationProps & ILoginProps;

export default class login extends React.Component<loginScreenProps, any> {
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
    const {facebookLogo, line, seoulOutline, googleLogo} = images;
    return (
      <View style={{flex: 1}}>
        <LinearGradient
          start={{x: 1, y: 0}}
          colors={[RED, DARKRED, PURPLE, DARKPUPRPLE, DARKBLUE]}
          style={styles.linearGradient}>
          <View style={styles.container}>
            <Text style={styles.title}>Business Korean</Text>
            <TouchableOpacity
              style={styles.logosAndTextContainer}
              onPress={this.onPressFacebookButton}>
              <Image source={facebookLogo} style={styles.facebookLogo} />
              <Text style={styles.loginText}> Login with Facebook </Text>
            </TouchableOpacity>
            <View style={styles.orContainer}>
              <Image source={line} style={styles.lineImage} />
              <Text style={styles.orText}>OR</Text>
              <Image source={line} style={styles.lineImage} />
            </View>
            <TouchableOpacity
              style={styles.logosAndTextContainer}
              onPress={this.onPressFacebookButton}>
              <Image source={googleLogo} style={styles.googleLogo} />
              <Text style={styles.loginText}> Login with Google </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.seoulImageContainer}>
            <Image source={seoulOutline} style={styles.seoulImage} />
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
const {HONEYDEW} = colorKeys;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
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
    fontFamily: 'god_bless_america',
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
    resizeMode: 'stretch',
  },
  googleLogo: {
    height: 40,
    width: 45,
    resizeMode: 'stretch',
  },
  orContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
  },
});

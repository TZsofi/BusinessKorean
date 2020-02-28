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
      StatusBar.setBarStyle('dark-content');
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
            <Text style={styles.appocska}>Appocska</Text>
            <TouchableOpacity
              style={styles.newFacebookContainer}
              onPress={this.onPressFacebookButton}>
              <Image source={facebookLogo} style={styles.facebookLogo} />
              <Text style={styles.facebookText}> Login with Facebook </Text>
            </TouchableOpacity>
            <View style={styles.orContainer}>
              <Image source={line} style={styles.lineImage} />
              <Text style={styles.facebookText}>OR</Text>
              <Image source={line} style={styles.lineImage} />
            </View>
            <TouchableOpacity
              style={styles.newFacebookContainer}
              onPress={this.onPressFacebookButton}>
              <Image source={googleLogo} style={styles.googleLogo} />
              <Text style={styles.facebookText}> Login with Google </Text>
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
    tintColor: '#F0FFF0',
    height: 280,
    width: '100%',
    resizeMode: 'stretch',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
  },
  appocska: {
    fontFamily: 'god_bless_america',
    color: '#FAF9F9',
    fontSize: 70,
    marginBottom: 10,
  },
  newFacebookContainer: {
    margin: 15,
    width: '75%',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  facebookContainer: {
    margin: 15,
    backgroundColor: '#3C5A99',
    width: '75%',
    height: '8%',
    flexDirection: 'row',
  },
  facebookImageView: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
  },
  facebookTextView: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookText: {
    color: '#FAF9F9',
  },
  lineImage: {
    tintColor: '#FAF9F9',
    height: 5,
    width: 120,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  facebookLogo: {
    height: 40,
    width: 45,
    padding: 5,
    flex: 1,
    resizeMode: 'contain',
  },
  googleLogo: {
    height: 40,
    width: 55,
    padding: 5,
    flex: 1,
    resizeMode: 'contain',
  },
  orContainer: {
    flexDirection: 'row',
  },
});

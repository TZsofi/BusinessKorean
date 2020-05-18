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
import {navigateToFbGoogleLogin} from './store/actions/loginAction';
import {screenKeys} from '../../constants/screenKeys';
import ButtonWithArrow from '../../components/buttonWithArrow';

export interface ILoginNavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
type loginProps = ILoginNavigationProps & ILoginProps;

export default class login extends React.Component<loginProps, any> {
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
    const {line, seoulOutline} = images;
    return (
      <View style={{flex: 1}}>
        <LinearGradient
          start={{x: 1, y: 0}}
          colors={[RED, DARKRED, PURPLE, DARKPUPRPLE, DARKBLUE]}
          style={styles.linearGradient}>
          <View style={styles.container}>
            <Text style={styles.title}>BUSINESS KOREAN</Text>
            <ButtonWithArrow text="Sign Up" />
            <View style={styles.orContainer}>
              <Image source={line} style={styles.lineImage} />
              <Text style={styles.orText}>OR</Text>
              <Image source={line} style={styles.lineImage} />
            </View>
            <ButtonWithArrow text="Sign In" />
            <TouchableOpacity
              style={styles.otherContainer}
              onPress={this.onPressOtherOptionsButton}>
              <Text style={styles.otherText}> Other sign-in options</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.seoulImageContainer}>
            <Image source={seoulOutline} style={styles.seoulImage} />
          </View>
        </LinearGradient>
      </View>
    );
  }
  private onPressSignInButton = () => {
    //TODO
  };
  private onPressSignUpButton = () => {
    //TODO
  };
  private onPressOtherOptionsButton = () => {
    const {navigate} = this.props.navigation;

    navigate(screenKeys.FBGOOGLELOGIN);
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
  otherContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
    fontFamily: 'Giraffey',
    color: HONEYDEW,
    fontSize: 70,
    marginBottom: 120,
    marginTop: 20,
  },
  BigTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  otherText: {
    color: HONEYDEW,
    marginTop: 5,
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
  orContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
  },
});

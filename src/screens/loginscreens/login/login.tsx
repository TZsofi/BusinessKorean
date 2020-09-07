import React from 'react';
import {View, StyleSheet, StatusBar, Image, Text, Alert} from 'react-native';
import {colorKeys} from '../../../constants/colorKeys';
import LinearGradient from 'react-native-linear-gradient';
import {
  NavigationEventSubscription,
  NavigationState,
  NavigationParams,
  NavigationScreenProp,
} from 'react-navigation';
import {images} from '../../../constants/images';
import {ILoginProps} from './interface';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {screenKeys} from '../../../constants/screenKeys';
import ButtonWithArrow from '../../../components/buttonWithArrow';
import LoginModal from './childcomponents/LoginModal';

export interface ILoginNavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export interface ILoginStates {
  signUpModalVisible: boolean;
  signInModalVisible: boolean;
}

type loginProps = ILoginNavigationProps & ILoginProps;
type loginStates = ILoginStates;

export default class Login extends React.Component<loginProps, loginStates> {
  constructor(props: loginProps) {
    super(props);
    this.state = {
      signUpModalVisible: false,
      signInModalVisible: false,
    };
  }
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
    const {
      updateEmail,
      updatePassword,
      updatePasswordAgain,
      hideSignInModal,
      hideSignUpModal,
      loginUser,
      registerUser,
    } = this.props;
    const {
      email,
      password,
      passwordAgain,
      signInVisible,
      signUpVisible,
    } = this.props.loginStore;

    //console.log(this.props.loginStore.signInVisible);
    return (
      <View style={{flex: 1}}>
        <LinearGradient
          start={{x: 1, y: 0}}
          colors={[RED, DARKRED, PURPLE, DARKPUPRPLE, DARKBLUE]}
          style={styles.linearGradient}>
          <View style={styles.container}>
            <Text style={styles.title}>BUSINESS KOREAN</Text>
            <ButtonWithArrow
              text="Sign In"
              onPress={this.onPressSignInButton}
            />

            <View style={styles.orContainer}>
              <Image source={line} style={styles.lineImage} />
              <Text style={styles.orText}>OR</Text>
              <Image source={line} style={styles.lineImage} />
            </View>
            <ButtonWithArrow
              text="Sign Up"
              onPress={this.onPressSignUpButton}
            />
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
        <LoginModal
          isVisible={signInVisible}
          email={email}
          password={password}
          passwordAgain={passwordAgain}
          updateEmail={updateEmail}
          updatePassword={updatePassword}
          updatePasswordAgain={updatePasswordAgain}
          registerUser={registerUser}
          hideModal={hideSignInModal}
          loginUser={loginUser}
          isSignUp={false}
          navigation={this.props.navigation}
        />
        <LoginModal
          isVisible={signUpVisible}
          email={email}
          password={password}
          passwordAgain={passwordAgain}
          updateEmail={updateEmail}
          updatePassword={updatePassword}
          updatePasswordAgain={updatePasswordAgain}
          registerUser={registerUser}
          hideModal={hideSignUpModal}
          loginUser={loginUser}
          isSignUp={true}
          navigation={this.props.navigation}
        />
        {/*TODO: feltetelt rakni hozza hogy ha nem visible ne renderelje*/}
      </View>
    );
  }
  private onPressSignInButton = () => {
    this.props.showSignInModal();
  };

  private onPressSignUpButton = () => {
    this.props.showSignUpModal();
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

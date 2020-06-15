import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  ScrollView,
  Button,
} from 'react-native';
import {colorKeys} from '../../../constants/colorKeys';
import LinearGradient from 'react-native-linear-gradient';
import {
  NavigationEventSubscription,
  NavigationState,
  NavigationParams,
  NavigationScreenProp,
} from 'react-navigation';
import {images} from '../../../constants/images';
import {ISignUpProps} from '../signUpModal/interface';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {screenKeys} from '../../../constants/screenKeys';
import LineTextInput from '../../../components/LineTextInput';
import Modal from 'react-native-modal';

export interface ISignUpNavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
export interface IExtraProps {
  visible: boolean;
}
type signUpProps = ISignUpNavigationProps & ISignUpProps & IExtraProps;

export default class SignUp extends React.Component<signUpProps, any> {
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
    const {modalVisible} = this.props;
    return (
      <View style={styles.modalContainer}>
        <Modal isVisible={this.props.modalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <LinearGradient
                colors={['#f9c5d1', '#9795ef']}
                useAngle={true}
                angle={110}
                style={styles.headerGradient}>
                <Text style={styles.title}>Sign Up</Text>
              </LinearGradient>
              <ScrollView contentContainerStyle={{justifyContent: 'center'}}>
                <LineTextInput
                  value={this.props.signUpStore.email}
                  placeholder="EMAIL"
                  onChangeValue={this.onChangeEmail}
                />
                <LineTextInput
                  placeholder="PASSWORD"
                  secureTyping={true}
                  value={this.props.signUpStore.password}
                  onChangeValue={this.onChangePassword}
                />
                <LineTextInput
                  placeholder="PASSWORD AGAIN"
                  secureTyping={true}
                  value={this.props.signUpStore.passwordAgain}
                  onChangeValue={this.onChangePasswordAgain}
                />

                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={this.onPressSubmitButton}>
                  <LinearGradient
                    colors={['#f9c5d1', '#9795ef']}
                    useAngle={true}
                    angle={135}
                    style={styles.buttonGradient}>
                    <Text style={{color: colorKeys.HONEYDEW}}>Submit</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <Button title="Test" onPress={this.onPressSubmitButton} />
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
  private onChangeEmail = (value: string) => {
    this.props.updateEmail(value);
  };
  private onChangePassword = (value: string) => {
    this.props.updatePassword(value);
  };
  private onChangePasswordAgain = (value: string) => {
    this.props.updatePasswordAgain(value);
  };
  private onPressSubmitButton = () => {
    console.log('megnyomtam a submit buttont');
    this.props.registerUser({
      email: this.props.signUpStore.email,
      password: this.props.signUpStore.password,
      passwordAgain: this.props.signUpStore.passwordAgain,
    });
  };
}
const {DARKPUPRPLE, HONEYDEW} = colorKeys;

const styles = StyleSheet.create({
  title: {
    marginLeft: 25,
    marginTop: 5,

    color: HONEYDEW,
    fontSize: 28,
  },

  lineImage: {
    tintColor: DARKPUPRPLE,
    height: 5,
    width: 120,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    resizeMode: 'stretch',
  },
  modal: {
    flex: 0,
    height: '80%',
    borderRadius: 10,
    backgroundColor: '#FAF9F9',
    width: '90%',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    flex: 1,
  },
  linetextInput: {
    margin: 5,
    marginTop: 10,
    marginBottom: 15,
  },
  headerGradient: {
    width: '100%',
    height: 80,
    marginBottom: 70,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  buttonGradient: {
    width: '60%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 100,
    borderRadius: 15,
  },
});

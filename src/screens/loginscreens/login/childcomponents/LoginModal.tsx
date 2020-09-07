import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {colorKeys} from '../../../../constants/colorKeys';
import LinearGradient from 'react-native-linear-gradient';
import LineTextInput from '../../../../components/LineTextInput';
import Modal from 'react-native-modal';
import {icons} from '../../../../constants/icons';
import {
  IRegisterParams,
  ILoginParams,
} from '../store/actions/loginActionInterface';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

export interface IModalProps {
  isVisible: boolean;
  email: string;
  password: string;
  passwordAgain: string;
  updateEmail: (email: string) => void;
  updatePassword: (password: string) => void;
  updatePasswordAgain: (password: string) => void;
  registerUser: (registerParams: IRegisterParams) => void;
  hideModal: () => void;
  loginUser: (loginParams: ILoginParams, navigation: NavigationParams) => void;
  isSignUp: boolean;
}

export interface IModalNavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
export type modalProps = IModalProps & IModalNavigationProps;

export default class LoginModal extends React.Component<modalProps, any> {
  public render() {
    const {
      DARKBLUE,
      DARKPUPRPLE,
      PURPLE,
      DARKRED,
      RED,
      LIGHTPURPLE,
    } = colorKeys;
    const {isVisible, email, password, passwordAgain} = this.props;
    return (
      <View style={styles.modalContainer}>
        <Modal isVisible={isVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <LinearGradient
                colors={['#f9c5d1', '#9795ef']}
                useAngle={true}
                angle={110}
                style={styles.headerGradient}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  }}>
                  <Text style={styles.title}>{this.getTitleText()}</Text>
                </View>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    marginBottom: 40,
                    marginRight: 20,
                  }}
                  onPress={this.close}>
                  <Image
                    style={styles.closeIcon}
                    resizeMode="contain"
                    source={icons.close}
                  />
                </TouchableOpacity>
              </LinearGradient>
              <ScrollView contentContainerStyle={{justifyContent: 'center'}}>
                <LineTextInput
                  value={email}
                  placeholder="EMAIL"
                  onChangeValue={this.onChangeEmail}
                />
                <LineTextInput
                  placeholder="PASSWORD"
                  secureTyping={true}
                  value={password}
                  onChangeValue={this.onChangePassword}
                />
                {this.renderPasswordAgainInputField()}

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
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
  private close = () => {
    //ez eleg lassu :(
    console.log('megnyomta');
    this.props.hideModal();
  };
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
    console.log(this.props.email);
    if (this.props.isSignUp) {
      this.props.registerUser({
        email: this.props.email,
        password: this.props.password,
        passwordAgain: this.props.passwordAgain,
      });
    } else {
      this.props.loginUser(
        {
          email: this.props.email,
          password: this.props.password,
        },
        {navigation: this.props.navigation},
      );
    }
  };
  private renderPasswordAgainInputField = () => {
    if (this.props.isSignUp) {
      return (
        <LineTextInput
          placeholder="PASSWORD AGAIN"
          secureTyping={true}
          value={this.props.passwordAgain}
          onChangeValue={this.onChangePasswordAgain}
        />
      );
    }
  };
  private getTitleText = () => {
    if (this.props.isSignUp) {
      return 'Sign Up';
    } else {
      return 'Sign In';
    }
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
    flexDirection: 'row',

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
  closeIcon: {
    flex: 1,
    height: '10%',
    width: '10%',
    tintColor: colorKeys.HONEYDEW,
  },
});

import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  ScrollView,
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
import {ISignInProps} from './interface';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {screenKeys} from '../../../constants/screenKeys';
import LineTextInput from '../../../components/LineTextInput';
import Modal from 'react-native-modal';

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
    const {modalVisible} = this.props;
    return (
      <View style={styles.modalContainer}>
        <Modal isVisible={modalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <LinearGradient
                colors={['#f9c5d1', '#9795ef']}
                useAngle={true}
                angle={110}
                style={styles.headerGradient}>
                <Text style={styles.title}>Sign In</Text>
              </LinearGradient>
              <ScrollView>
                <LineTextInput
                  value={this.props.signInStore.email}
                  placeholder="EMAIL"
                  onChangeValue={this.onChangeEmail}
                />
                <LineTextInput
                  placeholder="PASSWORD"
                  value={this.props.signInStore.password}
                  onChangeValue={this.onChangePassword}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                  <LinearGradient
                    colors={['#f9c5d1', '#9795ef']}
                    useAngle={true}
                    angle={135}
                    style={styles.buttonGradient}>
                    <Text style={{color: colorKeys.HONEYDEW}}>Sign In</Text>
                  </LinearGradient>
                </TouchableOpacity>
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
  //TODO: ezeket hozzaaddolni, es megneznu valtozik e az input fos
  private onChangePassword = (value: string) => {
    this.props.updatePassword(value);
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
  headerGradient: {
    width: '100%',
    height: 80,
    marginBottom: 70,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  modal: {
    flex: 0,
    height: '70%',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  linetextInput: {
    margin: 5,
    marginTop: 10,
    marginBottom: 15,
  },

  buttonGradient: {
    width: '60%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 50,
    borderRadius: 15,
  },
});

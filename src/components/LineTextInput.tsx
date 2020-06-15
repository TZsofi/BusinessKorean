import React from 'react';
import {View, StyleSheet, Text, Image, TextInput} from 'react-native';
import {images} from '../constants/images';
import {colorKeys} from '../constants/colorKeys';

export interface ILineTextInputProps {
  value: string;
  placeholder: string;
  errorText?: string;
  secureTyping?: boolean;
  onChangeValue?: (value: string) => void;
}

export default class LineTextInput extends React.Component<
  ILineTextInputProps,
  any
> {
  public render() {
    const {value, placeholder, onChangeValue, secureTyping} = this.props;
    const {line} = images;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          secureTextEntry={secureTyping}
          onChangeText={onChangeValue}
        />
        <Image source={line} style={styles.lineImage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lineImage: {
    tintColor: colorKeys.SIGNINBLUE,
    height: 10,
    width: '100%',
    resizeMode: 'stretch',
  },

  input: {
    color: colorKeys.SIGNINBLUE,
    borderWidth: 0,
    alignSelf: 'flex-start',
  },
  errorText: {
    marginLeft: 15,
    fontSize: 14,
    color: '#fa4234',
  },
  container: {
    flex: 1,
    height: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    margin: 15,
  },
});

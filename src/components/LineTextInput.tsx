import React from 'react';
import {View, StyleSheet, Text, Image, TextInput} from 'react-native';
import {images} from '../constants/images';
import {colorKeys} from '../constants/colorKeys';

export interface ILineTextInputProps {
  title: string;
  value: string;
  placeholder?: string;
  errorText?: string;
  onChangeValue?: (value: string) => void;
}

export default class LineTextInput extends React.Component<
  ILineTextInputProps,
  any
> {
  public render() {
    const {title, value, placeholder, onChangeValue} = this.props;
    const {line} = images;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeValue}
        />
        <Image source={line} style={styles.lineImage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lineImage: {
    tintColor: colorKeys.HONEYDEW,
    height: 10,
    width: '100%',
    resizeMode: 'stretch',
  },
  title: {
    marginLeft: 15,
    marginTop: 5,
    color: colorKeys.LIGHTPURPLE,
    fontWeight: 'bold',
    fontSize: 18,
  },
  input: {
    borderColor: '#f2f2f2',
    borderWidth: 1,
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
  text: {
    color: colorKeys.LIGHTPURPLE,
    fontSize: 20,
    paddingLeft: 20,
    fontWeight: '600',
  },
  icon: {
    tintColor: colorKeys.HONEYDEW,
    width: 15,
    height: 30,
    resizeMode: 'contain',
    paddingRight: 60,
  },
});

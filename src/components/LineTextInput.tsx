import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {images} from '../constants/images';
import {colorKeys} from '../constants/colorKeys';

export interface ILineTextInputProps {
  title: string;
  value?: string;
  placeholder?: string;
  errorText?: string;
  onChangeValue?: (value: string) => void;
}

export default class LineTextInput extends React.Component<
  ILineTextInputProps,
  any
> {
  public render() {
    const {title, errorText} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
  /*
  public renderInput = () => {
    const {data, placeholder, onChangeText, onPress} = this.props;

    if (onPress !== undefined) {
      return (
        <TouchableOpacity onPress={onPress} style={{flex: 1}}>
          {/* a pointerEvent=none megakadályozza, hogy bele lehessen kattintani az Inputba.
               Az Androidon ezt Viewba kell tenni}
          <View pointerEvents="none">
            <TextInput
              style={styles.input}
              value={data}
              placeholder={placeholder}
              onChangeText={onChangeText}
            />
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TextInput
          style={styles.input}
          value={data}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      );
    }
  };*/
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
    margin: 5,
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

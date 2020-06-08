import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {images} from '../constants/images';
import {colorKeys} from '../constants/colorKeys';

export interface IButtonWithArrowProps {
  text: string;
  onPress?: () => void;
}

export default class ButtonWithArrow extends React.Component<
  IButtonWithArrowProps,
  any
> {
  public render() {
    const {rightArrow} = images;
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View
          style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 1}}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
        <View
          style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 1}}>
          <Image source={rightArrow} style={styles.icon} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00000000',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colorKeys.HONEYDEW,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    margin: 5,
  },
  text: {
    color: colorKeys.HONEYDEW,
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

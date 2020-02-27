import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colorKeys} from '../../constants/colorKeys';
import LinearGradient from 'react-native-linear-gradient';

export default class login extends React.Component {
  public render() {
    const {DARKBLUE, DARKPUPRPLE, PURPLE, DARKRED, RED} = colorKeys;
    return (
      <View style={{flex: 1}}>
        <LinearGradient
          start={{x: 1, y: 0}}
          colors={[RED, DARKRED, PURPLE, DARKPUPRPLE, DARKBLUE]}
          style={styles.linearGradient}></LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 0,
  },
});

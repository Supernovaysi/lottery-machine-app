import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const LottoBall = ({lottoNumber}) => {
  // 1~10 yellow 11~20 blue 21~30 red 31~40 gray 41~45 green
  return (
    <View
      style={[
        styles.ball,
        {backgroundColor: colors[Math.floor(lottoNumber / 10)]},
      ]}>
      <Text style={styles.text}>{lottoNumber}</Text>
    </View>
  );
};

// colors = ['yellow', 'blue', 'red', 'gray', 'green']; in rgba
const colors = [
  'rgba(255, 255, 0, 0.5)',
  'rgba(0, 0, 255, 0.5)',
  'rgba(255, 0, 0, 0.5)',
  'rgba(128, 128, 128, 0.5)',
  'rgba(0, 128, 0, 0.5)',
];

const styles = StyleSheet.create({
  ball: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default LottoBall;

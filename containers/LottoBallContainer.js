import React from 'react';
import {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import LottoBall from '../components/LottoBall';
import LottoContext from '../contexts/LottoContext';

const LottoBallContainer = () => {
  const {lottoNumbers} = useContext(LottoContext);
  return (
    <View style={styles.block}>
      {lottoNumbers.map((lottoNumber, index) => (
        <LottoBall key={index} lottoNumber={lottoNumber} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    marginTop: 10,
    marginBottom: 30,
  },
});

export default LottoBallContainer;

import React from 'react';
import {StyleSheet, View, Text, Pressable, Platform} from 'react-native';
import {useContext} from 'react';
import LottoContext from '../contexts/LottoContext';
import RollHistoryContext from '../contexts/RollHistoryContext';

const RollButton = () => {
  const {lottoNumbers, rollLottoNumbers} = useContext(LottoContext);
  const {addRollHistory} = useContext(RollHistoryContext);

  const onPress = () => {
    rollLottoNumbers();
    addRollHistory(lottoNumbers);
  };
  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => {
          return [
            styles.button,
            Platform.OS === 'ios' && {
              opacity: pressed ? 0.5 : 1,
            },
          ];
        }}
        android_ripple={{color: 'pink'}}>
        <Text style={styles.text}>Roll</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 25,
    width: 100,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    //android
    elevation: 5,
    //ios
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    overflow: Platform.select({android: 'hidden'}),
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RollButton;

import React, {useEffect} from 'react';
import {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LottoContext = createContext();

export const LottoContextProvider = ({children}) => {
  const randomSixNumbers = () => {
    const newLottoNumbers = [];
    for (let i = 0; i < 6; i++) {
      // 1~45 not duplicated
      const newLottoNumber = Math.floor(Math.random() * 45) + 1;
      if (newLottoNumbers.includes(newLottoNumber)) {
        i--;
        continue;
      }
      newLottoNumbers.push(newLottoNumber);
    }
    newLottoNumbers.sort((a, b) => a - b);
    return newLottoNumbers;
  };

  const [lottoNumbers, setLottoNumbers] = useState(randomSixNumbers());
  const rollLottoNumbers = () => {
    const newLottoNumbers = [];
    for (let i = 0; i < 6; i++) {
      // 1~45 not duplicated
      const newLottoNumber = Math.floor(Math.random() * 45) + 1;
      if (newLottoNumbers.includes(newLottoNumber)) {
        i--;
        continue;
      }
      newLottoNumbers.push(newLottoNumber);
    }
    newLottoNumbers.sort((a, b) => a - b);
    setLottoNumbers(newLottoNumbers);
  };

  useEffect(() => {
    const getLottoNumbers = async () => {
      try {
        const value = await AsyncStorage.getItem('lottoNumbers');
        if (value !== null) {
          setLottoNumbers(JSON.parse(value));
        }
      } catch (e) {
        console.log(e);
      }
    };
    getLottoNumbers();
  }, []);

  useEffect(() => {
    const setLottoNumbersAsync = async () => {
      try {
        await AsyncStorage.setItem(
          'lottoNumbers',
          JSON.stringify(lottoNumbers),
        );
      } catch (e) {
        console.log(e);
      }
    };
    setLottoNumbersAsync();
  }, [lottoNumbers]);

  return (
    <LottoContext.Provider value={{lottoNumbers, rollLottoNumbers}}>
      {children}
    </LottoContext.Provider>
  );
};

export default LottoContext;

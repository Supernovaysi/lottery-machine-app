import React from 'react';
import {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RollHistoryContext = createContext();

export const RollHistoryContextProvider = ({children}) => {
  const [rollHistory, setRollHistory] = useState([]);
  const [selectedRolls, setSelectedRolls] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);

  const addRollHistory = numbers => {
    const newRollHistory = [...rollHistory];
    newRollHistory.push(numbers);
    if (newRollHistory.length > 100) {
      newRollHistory.shift();
    }
    setRollHistory(newRollHistory);
  };

  const addSelectedRolls = idx => {
    const newSelectedRolls = [...selectedRolls];
    newSelectedRolls.push(idx);
    newSelectedRolls.sort((a, b) => a - b);
    setSelectedRolls(newSelectedRolls);
  };

  const removeSelectedRolls = idx => {
    const newSelectedRolls = [...selectedRolls];
    const idxToRemove = newSelectedRolls.indexOf(idx);
    newSelectedRolls.splice(idxToRemove, 1);
    setSelectedRolls(newSelectedRolls);
  };

  const deleteSelectedRolls = () => {
    const newRollHistory = [...rollHistory];
    selectedRolls.reverse().forEach(idx => {
      newRollHistory.splice(idx, 1);
    });

    setRollHistory(newRollHistory);
    setSelectedRolls([]);
    setIsEditMode(false);
  };

  useEffect(() => {
    const getRollHistory = async () => {
      try {
        const value = await AsyncStorage.getItem('rollHistory');
        if (value !== null) {
          setRollHistory(JSON.parse(value));
        }
      } catch (e) {
        console.log(e);
      }
    };
    getRollHistory();
  }, []);

  useEffect(() => {
    const setRollHistoryAsync = async () => {
      try {
        await AsyncStorage.setItem('rollHistory', JSON.stringify(rollHistory));
      } catch (e) {
        console.log(e);
      }
    };
    setRollHistoryAsync();
  }, [rollHistory]);

  return (
    <RollHistoryContext.Provider
      value={{
        rollHistory,
        isEditMode,
        selectedRolls,
        addRollHistory,
        setRollHistory,
        addSelectedRolls,
        setSelectedRolls,
        removeSelectedRolls,
        deleteSelectedRolls,
        setIsEditMode,
      }}>
      {children}
    </RollHistoryContext.Provider>
  );
};

export default RollHistoryContext;

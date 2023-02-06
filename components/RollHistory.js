import React, {useContext, useEffect, useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import LottoBall from './LottoBall';
import RollHistoryContext from '../contexts/RollHistoryContext';

const RollHistory = ({history, idx}) => {
  const {isEditMode, addSelectedRolls, removeSelectedRolls, setIsEditMode} =
    useContext(RollHistoryContext);
  const [isSelected, setIsSelected] = useState(false);

  const handleLongPress = () => {
    setIsEditMode(true);
    setIsSelected(true);
    addSelectedRolls(idx);
  };

  const handlePress = () => {
    if (isEditMode) {
      if (isSelected) {
        setIsSelected(false);
        removeSelectedRolls(idx);
      } else {
        setIsSelected(true);
        addSelectedRolls(idx);
      }
    }
  };

  useEffect(() => {
    if (!isEditMode) {
      setIsSelected(false);
    }
  }, [isEditMode]);

  return (
    <Pressable
      onLongPress={handleLongPress}
      onPress={handlePress}
      style={() => {
        return [
          styles.card,
          isSelected ? {backgroundColor: '#e6e6e6'} : {backgroundColor: '#fff'},
        ];
      }}>
      {history.map((number, index) => (
        <LottoBall key={index} lottoNumber={number} />
      ))}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 100,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    paddingHorizontal: 10,
  },
});

export default RollHistory;

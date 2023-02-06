import React, {useContext} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import RollHistoryContext from '../contexts/RollHistoryContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HistoryHeaderLeft = () => {
  const {isEditMode, setIsEditMode, selectedRolls, setSelectedRolls} =
    useContext(RollHistoryContext);

  if (!isEditMode) {
    return <Text style={styles.text}>추첨 기록</Text>;
  }

  const handlePress = () => {
    setIsEditMode(false);
    setSelectedRolls([]);
  };

  return (
    <Pressable style={styles.block} onPress={handlePress}>
      <Icon name="cancel" size={25} backgroundColor="transparent" />
      <Text style={styles.text}> {selectedRolls.length}개 선택됨</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HistoryHeaderLeft;

import React from 'react';
import {Alert, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useContext} from 'react';
import RollHistoryContext from '../contexts/RollHistoryContext';

const RemoveHistoryButton = () => {
  const {setRollHistory, isEditMode, selectedRolls, deleteSelectedRolls} =
    useContext(RollHistoryContext);

  const deleteHistory = () => {
    if (isEditMode) {
      deleteSelectedRolls();
      return;
    }
    setRollHistory([]);
  };

  const handlePress = () => {
    Alert.alert(
      '삭제',
      isEditMode
        ? `${selectedRolls.length}개 기록을 삭제하시겠습니까?`
        : '모든 기록을 삭제하시겠습니까?',
      [
        {
          text: '취소',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: '삭제',
          onPress: () => {
            deleteHistory();
          },
          style: 'destructive',
        },
      ],
    );
  };

  return (
    <Pressable
      style={({pressed}) => {
        return [
          styles.deleteButton,
          {
            opacity: pressed ? 0.5 : 1,
            backgroundColor: pressed ? 'gray' : 'white',
          },
        ];
      }}
      onPress={handlePress}>
      <Icon name="delete" size={25} backgroundColor="transparent" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  deleteButton: {
    width: 40,
    height: 40,
    marginRight: 10,
    color: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RemoveHistoryButton;

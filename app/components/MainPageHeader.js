import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const MainPageHeader = () => {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>로또 번호 생성기</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MainPageHeader;

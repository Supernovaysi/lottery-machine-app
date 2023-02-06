import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const NoHistory = () => {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>아직 기록이 없습니다.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '100%',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default NoHistory;

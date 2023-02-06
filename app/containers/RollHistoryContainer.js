import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import RollHistory from '../components/RollHistory';
import {useContext} from 'react';
import RollHistoryContext from '../contexts/RollHistoryContext';
import NoHistory from '../components/NoHistory';

const RollHistoryContainer = () => {
  const {rollHistory} = useContext(RollHistoryContext);
  return (
    <ScrollView style={styles.container}>
      {rollHistory.length !== 0 ? (
        rollHistory.map((history, index) => (
          <RollHistory key={index} history={history} idx={index} />
        ))
      ) : (
        <NoHistory />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default RollHistoryContainer;

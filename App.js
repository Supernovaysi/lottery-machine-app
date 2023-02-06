import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {LottoContextProvider} from './contexts/LottoContext';
import {RollHistoryContextProvider} from './contexts/RollHistoryContext';

function App() {
  return (
    <NavigationContainer>
      <LottoContextProvider>
        <RollHistoryContextProvider>
          <RootStack />
        </RollHistoryContextProvider>
      </LottoContextProvider>
    </NavigationContainer>
  );
}

export default App;

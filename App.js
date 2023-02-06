import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './app/screens/RootStack';
import {LottoContextProvider} from './app/contexts/LottoContext';
import {RollHistoryContextProvider} from './app/contexts/RollHistoryContext';

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

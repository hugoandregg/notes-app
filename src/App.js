import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';

import ViewContainer from './components/ViewContainer';
import AppStack from './routes/AppStack';

const App = () => {
  return (
    <ViewContainer>
      <SafeAreaView>
        <AppStack />
      </SafeAreaView>
    </ViewContainer>
  );
};

export default App;

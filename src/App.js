import React from 'react';
import ViewContainer from './components/ViewContainer';
import AppStack from './routes/AppStack';
import CustomStatusBar from './components/StatusBar';

const App = () => {
  return (
    <ViewContainer>
      <CustomStatusBar />
      <AppStack />
    </ViewContainer>
  );
};

export default App;

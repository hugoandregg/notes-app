import React from 'react';

import ViewContainer from './components/ViewContainer';
import AppStack from './routes/AppStack';

const App = () => {
  return (
    <ViewContainer>
      <AppStack />
    </ViewContainer>
  );
};

export default App;

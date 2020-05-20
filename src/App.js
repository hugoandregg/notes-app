import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import styled from 'styled-components';
import ViewContainer from './components/ViewContainer';
import ChangeThemeButton from './components/ChangeThemeButton';

const BoxText = styled(Text)`
  padding: 16px;
  margin-top: 24px;
`;
const SimpleText = styled(Text)`
  color: #919191;
`;
const Title = styled(Text)`
  color: #111111;
  flex: 1;
  margin: 10px;
`;

const App = () => {
  return (
    <ViewContainer>
      <SafeAreaView>
        <ChangeThemeButton />
        <BoxText>
          <Title> Teste title </Title>
          <SimpleText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </SimpleText>
        </BoxText>
      </SafeAreaView>
    </ViewContainer>
  );
};

export default App;

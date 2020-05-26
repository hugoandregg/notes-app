import React from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';

const BottomView = styled(View)`
  background-color: ${props => props.theme.primaryColor};
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: flex-end;
  padding-right: 10px;
  position: absolute;
  bottom: 0;
`;

const BottomText = styled(Text)`
  color: #fff;
  font-size: 22px;
`;

export default () => {
  return (
    <BottomView>
      <BottomText>View</BottomText>
    </BottomView>
  );
};

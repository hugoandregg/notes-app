import React from 'react';
import styled from 'styled-components';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomView = styled(View)`
  background-color: ${props => props.theme.primaryColor};
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: flex-end;
  padding-right: 12px;
  position: absolute;
  bottom: 0;
`;

const IconButton = styled(Icon)`
  background-color: ${props => props.theme.primaryColor};
  font-size: 22px;
`;

export default ({navigation}) => {
  return (
    <BottomView>
      <IconButton
        name="edit"
        color="grey"
        onPress={() => navigation.push('CreateNoteScreen')}
      />
    </BottomView>
  );
};

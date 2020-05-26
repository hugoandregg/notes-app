import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconButton = styled(Icon.Button)`
  background-color: ${props => props.theme.primaryColor};
`;

export default ({navigation}) => {
  return (
    <IconButton
      name="cog"
      iconStyle={{color: 'grey'}}
      onPress={() => navigation.push('SettingsScreen')}
    />
  );
};

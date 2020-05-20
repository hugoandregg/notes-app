import styled from 'styled-components';
import {View, Dimensions} from 'react-native';

export default styled(View)`
  background-color: ${props => props.theme.background};
  height: ${Dimensions.get('window').height};
`;

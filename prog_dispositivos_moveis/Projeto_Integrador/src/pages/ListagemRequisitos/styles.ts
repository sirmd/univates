import styled from 'styled-components/native';
import { lighten } from 'polished';

export const Container = styled.View`
  flex: 1;
  background: ${lighten(0.01, '#346fef')};
`;

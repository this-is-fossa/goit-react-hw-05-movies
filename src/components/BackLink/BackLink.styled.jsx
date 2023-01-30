import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkBtn = styled(Link)`
  display: flex;
  align-items: center;
  color: #a30000;
  border-bottom: 1px solid transparent;
  :hover,
  :focus {
    border-color: #111111;
  }
`;

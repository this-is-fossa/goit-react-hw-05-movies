import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesItem = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const MoviesLink = styled(Link)`
  :hover,
  :focus {
    border-bottom: 1px solid #111111;
  }
`;

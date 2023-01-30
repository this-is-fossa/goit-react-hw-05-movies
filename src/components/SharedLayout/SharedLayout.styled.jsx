import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 30px;
  padding-right: 30px;
`;

export const NavBar = styled.nav`
  padding-top: 30px;
  padding-bottom: 30px;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`;

export const NavHome = styled(NavLink)`
  margin-left: 30px;
  padding: 10px 20px;
  color: #a30000;
  border: solid 1px #a30000;
  border-radius: 5px;
  :hover,
  :focus {
    color: #530303;
    background-color: #168f9d;
  }
`;

export const NavMovies = styled(NavLink)`
  margin-left: 50px;
  padding: 10px 20px;
  color: #a30000;
  border: solid 1px #a30000;
  border-radius: 5px;
  :hover,
  :focus {
    color: #530303;
    background-color: #168f9d;
  }
`;

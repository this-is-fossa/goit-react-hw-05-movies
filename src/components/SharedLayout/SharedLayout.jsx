import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, NavBar, NavHome, NavMovies } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <header>
        <NavBar>
          <NavHome to="/" end>
            Home
          </NavHome>
          <NavMovies to="/movies">Movies</NavMovies>
        </NavBar>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { TbMovie } from 'react-icons/tb';
import { AiOutlineHome } from 'react-icons/ai';

import BackToTop from 'react-back-to-top';

import { Appbar, Container, Navigation, NavItem } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Appbar>
        <Container>
          <Navigation>
            <NavItem to="/">
              <AiOutlineHome size={24} outline="#0000a0" />
              <span>Home</span>
            </NavItem>
            <NavItem to="movies">
              <TbMovie size={24} outline="#0000a0" />
              <span>Movies</span>
            </NavItem>
          </Navigation>
        </Container>
      </Appbar>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

      <BackToTop
        mainStyle={{
          width: '100%',
          height: '100%',
          background: 'url(...)',
        }}
        percentStyle={{
          width: '100%',
          height: '100%',
          color: '#0000A0',
        }}
        animate="rotate"
        offsetTop={20}
        step={50}
        percent={true}
        visiblePercent={50}
      />
    </>
  );
};


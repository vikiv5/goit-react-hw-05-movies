import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const Appbar = styled.header`
   background: linear-gradient(62.93deg, #97ccf0 19.68%, #5218fa 89.55%);
`;

const Container = styled.div`
   margin-left: auto;
  margin-right: auto;
  width: 1280px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-top: 32px;
  padding-bottom: 32px;
  text-transform: capitalize;
  border-bottom: 4px solid transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    border-color: #0000a0;
        border-radius: 4px;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #5218fa;
  }
`;

export { Appbar, Container, Navigation, NavItem };
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
  padding-top: 24px;
  padding-bottom: 24px;
  `;

const Container = styled.div`
  width: 1280px;
  padding: 20px;
    margin-left: auto;
  margin-right: auto;
`;

const MovieWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 24px;
  margin-bottom: 24px;
  box-shadow: 0 8px 8px #0000a0;
  img {
        width: 320px;
    margin: 20px;
  }
  p {
        margin: 30px;
    color: #00003e;
  }
  h2 {
    margin-left: 40px;
  }
`;

const Title = styled.h1`
    margin: 30px;
  font-size: 42px;
`;

const GenreWrapper = styled.p`
  display: flex;
  gap: 12px;
`;

const Genre = styled.span`
  padding: 4px 12px;
  font-size: 16px;
  line-height: 1.4;
  border: 1px solid #0000a0;
  border-radius: 4px;
`;

const AdditionalInfo = styled.div`
    margin-bottom: 32px;
  margin-top: 40px;
  h2 {
    margin-bottom: 24px;
   font-size: 36px;
  }
  ul {
    display: flex;
    gap: 16px;
  }
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  text-transform: capitalize;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    color: #0000a0;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #5218fa;
  }
`;

export {
  Section,
  Container,
  MovieWrapper,
  Title,
  GenreWrapper,
  Genre,
  AdditionalInfo,
  NavItem,
};
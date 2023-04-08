import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: calc((100% - 3 * 40px) / 4);
  box-shadow: 0 8px 8px #0000a0;
  border-radius: 5px;
`;

const Item = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
`;

const Poster = styled.img`
  margin-top: 20px;
  height: 365px;
  width: 90%;
  border-radius: 5px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    transform: scale(1.1);
  }
`;

const Info = styled.div`
  padding: 30px 20px;
`;

export { List, ListItem, Item, Poster, Info };
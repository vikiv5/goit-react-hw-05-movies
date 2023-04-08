import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  li {
    flex-basis: calc((100% - 6 * 16px) / 7);
  }
  img {
    width: 100%;
    height: 75%;
    margin-bottom: 16px;
    object-fit: cover;
    border-radius: 4px;
  }
  p {
    font-size: 12px;
  }
`;

const Character = styled.p`
  margin-top: 4px;
  color: #00003e;
`;

export { List, Character };
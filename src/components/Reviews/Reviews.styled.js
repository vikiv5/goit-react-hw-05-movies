import styled from 'styled-components';

const Quote = styled.blockquote`
  position: relative;
  font-size: 16px;
   letter-spacing: 1px;
  line-height: 1.2;
  
  p {
    margin-top: 16px;
    color: #00003e;
  }
  svg {
    margin-right: 16px;
  }
  cite {
    font-style: normal;
  }
`;

export { Quote };
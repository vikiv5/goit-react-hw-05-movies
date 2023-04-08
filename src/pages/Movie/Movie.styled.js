import styled from 'styled-components';

const Section = styled.section`
  padding-top: 36px;
  padding-bottom: 36px;
  text-align: center;
`;

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 1280px;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
  margin-bottom: 36px;
  width: 510px;
  border-radius: 4px;
`;
const Field = styled.div`
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  padding: 0 4px;
  font-size: 16px;
   color: #0000a0;
  pointer-events: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  Input:focus ~ &,
  Input:not(:placeholder-shown) ~ & {
        transform: translateY(-50px) scale(0.9);
    color: #0000a0;
      }
  Input:not(:focus) ~ & {
    color: #0000a0;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 8px 16px;
  padding-right: 42px;
  font-size: 16px;
  letter-spacing: 1.4px;
  color: #0000a0;
  background-color: transparent;
  border: 1px solid #0000a0;
  border-radius: 10px;
  outline: none;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    border-color: #0000a0;
       box-shadow: 0 8px 8px #0000a0;
  }
  &:not(:focus) {
    color: #0000a0;
  }
`;

const Button = styled.button`
  position: absolute;
    top: 30%;
  right: 16px;
    padding: 0;
  color: #0000a0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #5218fa;
  }
  animation: button 3000ms infinite;
  @keyframes button {
    0% {
      transform: scale(1.5);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.5);
    }
  }
`;

export { Section, Container, Form, Field, Label, Input, Button };
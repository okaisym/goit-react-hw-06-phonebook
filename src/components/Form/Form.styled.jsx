import styled from '@emotion/styled';

export const Label = styled.label`
  font-weight: 700;
  display: flex;
  flex-flow: column;

  color: #fff;
`;

export const AddContactBtn = styled.button`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: #6495ed;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.5s;
  &:hover {
    background-color: #3367d6;
    box-shadow: 0 0 10px #fff;
  }
  &:active {
    background-color: #2a56c8;
    box-shadow: 0 0 10px #fff;
  }
  font-weight: 700;
  margin: 20px auto; 
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  border-color: #6495ed;
  max-width: 500px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
 justify-content: center;
  align-items: center;
`;
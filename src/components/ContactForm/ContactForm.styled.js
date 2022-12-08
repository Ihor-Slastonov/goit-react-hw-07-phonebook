import styled from 'styled-components';

export const Form = styled.form`
  padding: 20px;
  margin: 20px 0;
  border: 2px solid black;
  border-radius: 20px;
  background-color: #3db2ff;
`;
export const Field = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 700;
`;

export const Input = styled.input`
  margin-top: 10px;
  padding: 4px 4px 4px 20px;
  height: 30px;
  font-size: 18px;
  border: 2px solid black;
  border-radius: 20px;
  transition: box-shadow 250ms linear;
  :hover,
  :focus {
    outline: none;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const SubmitBtn = styled.button`
  display: block;
  margin: 0 auto;
  width: 120px;
  height: 50px;

  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 20px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.75);
  transition: background-color 250ms linear;
  :hover {
    background-color: #ffb830;
  }
`;

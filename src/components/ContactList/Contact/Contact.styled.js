import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: #ffedda;
  transition: box-shadow 250ms linear;
  :hover {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.75);
  }
  :nth-of-type(even) {
    background-color: #ffb830;
  }
`;
export const ContactInfo = styled.p`
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
`;
export const DeleteBtn = styled.button`
  display: block;
  margin-right: 8px;
  margin-left: auto;
  width: 30px;
  height: 30px;
  font-size: 18px;
  background-color: #ff2442;
  border: 1px solid black;
  border-radius: 50%;
  box-shadow: 0px 4px px 0px rgba(0, 0, 0, 0.75);

  cursor: pointer;
  transition: transform 250ms linear;
  :hover,
  :focus {
    transform: scale(1.2);
  }
`;

import styled from "styled-components";

export const CardStyled = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  margin-top: 30px;
  width: 225px;
  height: 275px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;

  @media (max-width: 768px) {
    width: 100%; 
    margin-bottom: 10px;
  }
`;

export const InputStyled = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 60%;
  margin-top: 30px;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  &:disabled {
    background-color: #f2f2f2;
    color: #999;
  }
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

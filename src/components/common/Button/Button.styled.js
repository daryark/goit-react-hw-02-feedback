import styled from 'styled-components';

export const Button = styled.button`
  padding: 1px 7px 3px;
  margin-right: 10px;
  margin-bottom: 25px;

  text-transform: capitalize;
  background-color: #f4f5ff;
  border: 2px solid #8497bd;
  border-radius: 4px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #a7aeff;
  }
`;

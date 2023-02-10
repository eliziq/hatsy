import styled from "styled-components";
import { SpinnerContainer } from "../Spinner/SpinnerStyle";


export const DefaultButton = styled.button`
  min-width: 150px;
  width: auto;
  height: 50px;
  letter-spacing: 1px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #1d1d1d;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: white;
    color: #1d1d1d;
    border: 1px solid #1d1d1d;
  }
`;

export const SpecialButton = styled(DefaultButton)`
  background-color: #cacf85;
  color: #1d1d1d;
  border: 1px solid #1d1d1d;
  font-weight: 400;

  &:hover {
    background-color: #cacf85;
    border: 1px solid #1d1d1d;
    font-weight: bold;
  }
`;

export const InvertedButton = styled(DefaultButton)`
  background-color: white;
  color: #1d1d1d;
  border: 1px solid #1d1d1d;

  &:hover {
    background-color: #1d1d1d;
    color: white;
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`

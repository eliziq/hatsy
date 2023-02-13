import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 70%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #8c8c8c;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 22%;
  text-align: center;
  color: #8c8c8c;
  &:first-child {
    text-align: start;
  }
  &:last-child {
    width: 12%;
    text-align: end;
  }
`;

export const TotalContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;


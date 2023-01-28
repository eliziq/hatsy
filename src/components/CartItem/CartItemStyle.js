import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 60px;
  margin-bottom: 10px;

  img {
    width: 60px;
    height: 100%;
    object-fit: cover;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 300;
  h2 {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const Numbers = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Price = styled.span`
  font-size: 14px;
  font-weight: 400;
`;
export const Quantity = styled.span`
  font-size: 14px;
  font-weight: 300;
`;

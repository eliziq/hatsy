import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 300;
  align-items: center;
`;

export const ImageContainer = styled.div`
  height: 180px;
  width: 180px;
  max-width: 22%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BaseSpan = styled.span`
  width: 22%;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 15px;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
  align-items: center;
  span{
    padding:0px 10px
  }
`;

export const RemoveBtn = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const Arrow = styled.span`
  cursor: pointer;
`;

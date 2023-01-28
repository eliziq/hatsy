import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: absolute;
  width: 260px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 40px;
  z-index: 5;
`;

export const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 100px auto;
  top: 50%;
  height: 100%;
  text-align: center;
  color: #938ba1;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: thin;
  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #938ba1;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 10px;
`;

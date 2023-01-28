import styled from "styled-components";

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  h2 {
    margin-bottom: 25px;
    span {
      font-size: 24px;
      cursor: pointer;
    }
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

import styled from 'styled-components';

export const TrasactionTable = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 600px;
`;

export const TrasactionTableTr = styled.tr`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border: 2px dashed black;
  th {
    width: 200px;
  }
  td {
    width: 200px;
    text-align: center;
  }
`;

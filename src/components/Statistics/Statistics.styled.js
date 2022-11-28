import styled from 'styled-components';

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed black;
  border-radius: 30px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  gap: 16px;
  background-color: grey;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 12px;
  }
`;

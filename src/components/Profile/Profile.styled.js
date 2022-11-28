import styled from 'styled-components';

export const ProfileBox = styled.div`
  background-color: gray;
  border-radius: 30px;
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserImg = styled.img`
  border-radius: 50%;
`;

export const UserDescription = styled.p`
  margin-top: 15px;
`;

export const UserStats = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

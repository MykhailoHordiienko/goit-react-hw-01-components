import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 9px;
  padding: 8px;
  width: 250px;
  border: 2px solid black;
  border-radius: 5px;
`;

export const FriendStatusOff = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: red;
`;

export const FriendStatusOn = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: green;
`;

import {
  FriendStatusOff,
  FriendStatusOn,
  FriendItem,
} from './FriendListItem.styled.js';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      {isOnline ? <FriendStatusOn /> : <FriendStatusOff />}
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendItem>
  );
};

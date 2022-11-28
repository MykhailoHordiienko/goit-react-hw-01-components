import PropTypes from 'prop-types';

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

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

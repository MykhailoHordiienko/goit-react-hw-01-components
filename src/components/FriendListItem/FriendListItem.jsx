import PropTypes from 'prop-types';

import { FriendStatus, FriendItem } from './FriendListItem.styled.js';
import { getBgColorStatus } from '../helpers/getBgColorStatus.js';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendStatus style={{ backgroundColor: getBgColorStatus(isOnline) }} />
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

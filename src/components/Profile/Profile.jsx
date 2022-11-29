import PropTypes from 'prop-types';

import {
  ProfileBox,
  DescriptionBox,
  UserImg,
  UserDescription,
  UserStats,
} from './Profile.styled.js';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileBox>
      <DescriptionBox>
        <UserImg src={avatar} alt="User avatar" />
        <UserDescription>{username}</UserDescription>
        <UserDescription>@{tag}</UserDescription>
        <UserDescription>{location}</UserDescription>
      </DescriptionBox>

      <UserStats>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </UserStats>
    </ProfileBox>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

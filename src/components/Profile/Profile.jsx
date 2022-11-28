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
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </UserStats>
    </ProfileBox>
  );
};

import { gql, useQuery } from '@apollo/client';
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import AddPost from '../addPost/AddPost';
import Post from '../post/Post';

const GET_PROFILE = gql`
  query Profile($userId: ID, $take: Int!, $skip: Int!) {
    profile(userId: $userId) {
      id
      bio
      isMyProfile
      user {
        id
        email
        name
        posts(take: $take, skip: $skip) {
          id
          title
          content
          published
          createdAt
        }
      }
    }
  }
`;
const Profile: FC = () => {
  const { id } = useParams();

  const { data, error, loading } = useQuery(GET_PROFILE, {
    variables: {
      take: 10,
      skip: 0,
      userId: id,
    },
  });
  if (error) return <div>error page</div>;

  if (loading) return <div>Spinner...</div>;

  const { profile } = data;

  return (
    <div>
      <div
        style={{
          marginBottom: '2rem',
          display: 'flex ',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h1>{profile.user.name}</h1>
          <p>{profile.bio}</p>
        </div>
        <div>{profile.isMyProfile ? <AddPost /> : null}</div>
      </div>
      <div>
        {profile.user.posts.map((post: any) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              content={post.content}
              date={post.createdAt}
              user={profile.user.name}
              published={post.published}
              isMyProfile={profile.isMyProfile}
              id={post.id}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Profile;

import { gql, useMutation } from '@apollo/client';
import React, { FC } from 'react';
import './Post.css';
export interface Ipost {
  title: string;
  content: string;
  date: string;
  user: string;
  published: boolean;
  id: string;
  isMyProfile: boolean;
}

const PUBLISH_POST = gql`
  mutation PostPublish($postId: ID!) {
    postPublish(postId: $postId) {
      userErrors {
        message
      }
      post {
        id
        title
        content
        published
        createdAt
      }
    }
  }
`;

const UNPUBLISH_POST = gql`
  mutation PostUnpublish($postId: ID!) {
    postUnpublish(postId: $postId) {
      userErrors {
        message
      }
      post {
        id
        title
        content
        published
        createdAt
      }
    }
  }
`;

const Post: FC<Ipost> = ({
  title,
  content,
  date,
  user,
  published,
  id,
  isMyProfile,
}) => {
  const formatedDate = new Date(Number(date));

  const [publishPost, { data, loading }] = useMutation(PUBLISH_POST);
  const [unpublishPost, { data: unpublishData, loading: unpublishLoading }] =
    useMutation(UNPUBLISH_POST);

  return (
    <div
      className="Post"
      style={published === false ? { backgroundColor: 'hotpink' } : {}}
    >
      {isMyProfile && published === false && (
        <p
          className="Post__publish"
          onClick={() => {
            publishPost({
              variables: {
                postId: id,
              },
            });
          }}
        >
          publish
        </p>
      )}
      {isMyProfile && published === true && (
        <p
          className="Post__publish"
          onClick={() => {
            unpublishPost({
              variables: {
                postId: id,
              },
            });
          }}
        >
          unpublish
        </p>
      )}
      <div className="Post__header-container">
        <h2>{title}</h2>
        <h4>
          Created At {`${formatedDate}`.split(' ').splice(0, 3).join(' ')} by{' '}
          {user}
        </h4>
      </div>
      <p>{content}</p>
    </div>
  );
};
export default Post;

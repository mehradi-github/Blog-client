import React, { FC, Fragment, ReactNode } from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_POSTS = gql`
  query Posts($take: Int!, $skip: Int!) {
    posts(take: $take, skip: $skip) {
      id
      title
      content
      published
      createdAt
    }
  }
`;

const Posts: FC = () => {
  const { data, error, loading } = useQuery(GET_POSTS, {
    variables: { take: 10, skip: 0 },
  });
  console.log({ data, error, loading });

  if (error) return <div>Error Page</div>;
  if (loading) return <div>Loading</div>;
  console.log(data);

  return <div></div>;
};
export default Posts;

import React, { FC, Fragment, ReactNode } from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_POSTS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const Posts: FC = () => {
  const { data, error, loading } = useQuery(GET_POSTS);
  console.log({ data, error, loading });

  if (error) return <div>Error Page</div>;
  if (loading) return <div>Loading</div>;
  console.log(data);

  return <div></div>;
};
export default Posts;

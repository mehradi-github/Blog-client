import { gql, useMutation } from '@apollo/client';
import React, { FC, useEffect, useState } from 'react';
interface CredentialsInput {
  email: string;
  password: string;
}
const SINGIN = gql`
  mutation Signin($credentials: CredentialsInput!) {
    signin(credentials: $credentials) {
      token
      userErrors {
        message
      }
    }
  }
`;
const Signin: FC = () => {
  const [Signin, { data, error, loading }] = useMutation(SINGIN);

  const [err, setErr] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelClick = () => {
    Signin({
      variables: {
        credentials: {
          email,
          password,
        },
      },
    });
  };

  useEffect(() => {
    if (data) {
      if (data.signin.userErrors.length) {
        setErr(data.signin.userErrors[0].message);
      }
      if (data.signin.token) {
        localStorage.setItem('token', data.signin.token);
      }
    }
  }, [data]);

  return <div>Signin</div>;
};
export default Signin;

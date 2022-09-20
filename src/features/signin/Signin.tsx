import { gql, useMutation } from '@apollo/client';
import React, { FC, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [signin, { data, error, loading }] = useMutation(SINGIN);

  const [err, setErr] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('submit');
    signin({
      variables: {
        credentials: {
          email,
          password,
        },
      },
    });
  };

  useEffect(() => {
    console.log({ data, error, loading });
    if (data) {
      if (data.signin.userErrors.length) {
        setErr(data.signin.userErrors[0].message);
      }
      if (data.signin.token) {
        localStorage.setItem('token', data.signin.token);
        setIsLogin(true);
      }
    }
  }, [data]);

  if (isLogin) navigate('/profile');

  return (
    <Form onSubmit={submitForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Link to="/Signup"> Signup</Link>
      <Form.Text>{err && <p>{err}</p>}</Form.Text>
    </Form>
  );
};
export default Signin;

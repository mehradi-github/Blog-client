import { useMutation, gql } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SIGNUP = gql`
  mutation Signup(
    $credentials: CredentialsInput!
    $name: String!
    $bio: String!
  ) {
    signup(credentials: $credentials, name: $name, bio: $bio) {
      userErrors {
        message
      }
      token
    }
  }
`;

export default function Signup() {
  const navigate = useNavigate();
  const [signup, { data, loading }] = useMutation(SIGNUP);

  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signup({
      variables: {
        credentials: {
          email,
          password,
        },
        name,
        bio,
      },
    });
  };

  const [error, setError] = useState(null);

  useEffect(() => {
    if (data) {
      if (data.signup.userErrors.length) {
        setError(data.signup.userErrors[0].message);
      }
      if (data.signup.token) {
        localStorage.setItem('token', data.signup.token);
        setIsLogin(true);
      }
    }
  }, [data]);

  if (isLogin) navigate('/profile');

  return (
    <div>
      <Form onSubmit={submitForm}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Bio</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </Form.Group>
        {error && <p>{error}</p>}
        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </div>
  );
}

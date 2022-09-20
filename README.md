# Connecting the client to GraphQL with Apollo client

The blog-client is built by React (typescript) and [Graphql](https://graphql.org/code/#javascript-client).(This project depends on the [blog-server](https://github.com/mehradi-github/blog-server))

## Installing Requirements

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit TS template](https://redux-toolkit.js.org/introduction/getting-started).

```sh
# Redux + TypeScript template
npx create-react-app blog-client --template redux-typescript

npm i -D eslint
npm create @eslint/config
npm i react-router-dom
npm i -D prettier eslint-config-prettier @types/react-router-dom
```

Learn more: [Install ESLint, Prettier, ESLint Plugin for Testing Library, ESLint Plugin for Jest DOM](https://github.com/mehradi-github/jest-rtl/)

Installing react-bootstrap Official Site: [https://react-bootstrap.github.io/getting-started/introduction](https://react-bootstrap.github.io/getting-started/introduction)

```sh
npm i react-bootstrap bootstrap
npm i -D @types/react-bootstrap @types/bootstrap
```

src/index.tsx

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

## Installing Apollo Client

[Apollo Client](https://www.apollographql.com/docs/react/get-started) is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating your UI.

```sh
npm i @apollo/client graphql
```

example Signin:

```javascript
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
const [signin, { data, error, loading }] = useMutation(SINGIN);

useEffect(() => {
  if (data && data.signin.token) {
    localStorage.setItem('token', data.signin.token);
  }
}, [data]);

const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  signin({
    variables: {
      credentials: {
        email,
        password,
      },
    },
  });
};
```

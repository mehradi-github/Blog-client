import { useMutation, gql } from '@apollo/client';
import React, { FC, Fragment, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CREATE_POST = gql`
  mutation PostCreate($post: PostInput!) {
    postCreate(post: $post) {
      userErrors {
        message
      }
      post {
        id
        title
        content
        published
        createdAt
        user {
          name
        }
      }
    }
  }
`;

const AddPostModal: FC = () => {
  const [addPost, { data, loading }] = useMutation(CREATE_POST);
  const [show, setShow] = useState(false);

  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addPost({
      variables: {
        post: {
          title,
          content,
        },
      },
    });
  };

  return (
    <Fragment>
      <Button variant="primary" onClick={() => setShow(true)}>
        Add Post
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default AddPostModal;

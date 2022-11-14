import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteThisPost } from '../api/postData';

function PostsCard({ postObj, onUpdate }) {
  // console.warn(typeof postObj.category_id);
  const deletePost = () => {
    if (window.confirm('Delete this post?')) {
      deleteThisPost(postObj.id).then(() => onUpdate());
      console.warn(postObj.id);
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{postObj.title}</Card.Title>
        <h3>{postObj.user_id}</h3>
        <p className="card-text bold">{postObj.category_id} {postObj.publication_date}</p>

        <p>{postObj.content}</p>

        <Link href={`/post/${postObj.id}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>

        <Link href={`/post/edit/${postObj.id}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deletePost} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

PostsCard.propTypes = {
  postObj: PropTypes.shape({
    id: PropTypes.number,
    user_id: PropTypes.number,
    category_id: PropTypes.number,
    title: PropTypes.string,
    publication_date: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default PostsCard;

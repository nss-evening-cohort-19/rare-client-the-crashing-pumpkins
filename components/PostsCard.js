import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

function PostsCard({ postObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{postObj.title}</Card.Title>
        <h3>{postObj.user_id}</h3>
        <p className="card-text bold">{postObj.category_id}  {postObj.tag_id} {postObj.publication_date}</p>

        <p>{postObj.content}</p>

        <Link href={`/author/${postObj.id}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>

        <Link href={`/author/edit/${postObj.id}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

PostsCard.propTypes = {
  postObj: PropTypes.shape({
    id: PropTypes.string,
    user_id: PropTypes.string,
    category_id: PropTypes.string,
    title: PropTypes.string,
    publication_date: PropTypes.string,
    tag_id: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default PostsCard;

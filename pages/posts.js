/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../api/postData';
import PostsCard from '../components/PostsCard';

export default function Posts() {
  const [posts, setAllPosts] = useState();

  const getPosts = () => {
    getAllPosts().then(setAllPosts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {/* TODO: map over books here using BookCard component */}
      {posts?.map((post) => (
        <PostsCard key={post.id} postObj={post} onUpdate={getPosts} />
      ))}
    </div>
  );
}

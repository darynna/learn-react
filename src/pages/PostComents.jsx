import React from 'react';
import { useParams } from 'react-router-dom';

const PostCommentsPage = () => {
const {postId} = useParams();

  return <div>PostCommentsPage - postId = {postId}</div>;
};

export default PostCommentsPage;
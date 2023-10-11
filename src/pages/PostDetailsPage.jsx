import React from 'react';
import { useParams } from 'react-router-dom';
import { NavLink, Routes, Route } from 'react-router-dom';
import  PostCommentsPage from './PostComents'

const PostDetailsPage = () => {
  const { postId } = useParams();

  return (
    <div>
      <h1>PostId: {postId}</h1>
      PostDetailsPage
      <div>
        <NavLink to="comments">Comments</NavLink>
      </div>
      <Routes>
       <Route path='comments' element={<PostCommentsPage/>}/>
      </Routes>
    </div>
  );
};

export default PostDetailsPage;
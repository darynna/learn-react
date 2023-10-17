import React, { useEffect,  Suspense,} from 'react';
import { useParams } from 'react-router-dom';
import { NavLink, Routes, Route } from 'react-router-dom';
import  PostCommentsPage from './PostComents'
import { useDispatch, useSelector } from 'react-redux';
import { findPostById } from 'services/apii';


const PostDetailsPage = () => {
  const { postId } = useParams();


  const postDetails = useSelector((state)=> state.postDetails.postDetailsData)
  const isLoading = useSelector((state)=> state.postDetails.isLoading)
  const error = useSelector((state)=> state.postDetails.error)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!postId) return;

    const fetchAllPosts = async () => {
      try {
        // setIsLoading(true);
        dispatch({type: 'postDetails/setLoading', payload: true}) 
        const postData = await findPostById(postId);
        dispatch({type: 'postDetails/setPostDetails', payload: postData}) 
        // setPostDetails(postData);
      } catch (error) {
        dispatch({type: 'postDetails/setError', payload: true})
        // setError(error.message);
      } finally {
        dispatch({type: 'postDetails/setLoading', payload: false}) 
        // setIsLoading(false);
      }
    };

    fetchAllPosts();
  }, [postId, dispatch]);


  return (
    <div>
      {/* <Link to={backLinkHref.current}>Go Back</Link> */}

      {isLoading && <div>loading....</div>}
      {error && <div>ERROR</div>}
      {postDetails !== null && (
        <div>
          <h2>Post Title: {postDetails.title}</h2>
          <p>Post Body: {postDetails.body}</p>
        </div>
      )}

      <div>
        <NavLink to="comments" className="header-link">
          Comments
        </NavLink>
      </div>

      <Suspense fallback={<div>loading....</div>}>
        <Routes>
          <Route path="comments" element={<PostCommentsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default PostDetailsPage;

const INITIAL_STATE = {
  postDetailsData: null,
  isLoading: false,
  error: null,
  posts: []
};

export const postDetailsReducer = (state = INITIAL_STATE, action)=>{
    // action => {type: 'postDetails/setLoading', payload: false}
 switch(action.type){
    case 'postDetails/setLoading':{
     return {
        ...state,
        isLoading: action.payload
     };
    }
    case 'postDetails/setPostDetails':{
        return{
            ...state,
            postDetailsData: action.payload
        };
    }
    case 'postDetails/setError':{
        return{
            ...state,
            error: action.payload
        }
    }
    case 'postDetails/addPosts':{
        return{
            ...state,
            posts: [...state.posts, action.payload]
        }
    }
    case 'postDetails/deletePosts':{
        return{
            ...state,
            posts: state.posts.filter(post => post.id !== action.payload)
        }
    }
    default:
        return state
 }
}
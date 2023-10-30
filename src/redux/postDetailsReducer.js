import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  postDetailsData: null,
  isLoading: false,
  error: null,
  posts: []
};

// export const postDetailsReducer = (state = INITIAL_STATE, action)=>{
//     // action => {type: 'postDetails/setLoading', payload: false}
//  switch(action.type){
//     case 'postDetails/setLoading':{
//      return {
//         ...state,
//         isLoading: action.payload
//      };
//     }
//     case 'postDetails/setPostDetails':{
//         return{
//             ...state,
//             postDetailsData: action.payload
//         };
//     }
//     case 'postDetails/setError':{
//         return{
//             ...state,
//             error: action.payload
//         }
//     }
//     case 'postDetails/addPosts':{
//         return{
//             ...state,
//             posts: [...state.posts, action.payload]
//         }
//     }
//     case 'postDetails/deletePosts':{
//         return{
//             ...state,
//             posts: state.posts.filter(post => post.id !== action.payload)
//         }
//     }
//     default:
//         return state
//  }
// }

const postDetailsSlice = createSlice({
    name: 'postDetails',
    initialState: INITIAL_STATE,
    reducers:{
        setLoading(state, action){
            state.isLoading = action.payload
        },
        setPostDetails(state, action){
            state.postDetailsData = action.payload
        },
        setError(state, action){
            state.error = action.payload
        },
        addPosts(state, action){
          state.posts.push(action.payload)     
        },
        deletePosts(state, action){
            state.posts = state.posts.filter(post => post.id !== action.payload)
        }
    }
})

export const {setLoading, setPostDetails, setError, addPosts, deletePosts} = postDetailsSlice.actions
export const postDetailsReducer = postDetailsSlice.reducer

// export const setIsLoading = (payload)=>{
//     return{
//         type: 'postDetails/setLoading',
//         payload 
//     }
// }

// export const setPostDetails = (payload)=>{
//     return{
//         type: 'postDetails/setPostDetails',
//         payload 
//     }
// }

// export const setError = (payload)=>{
//     return{
//         type: 'postDetails/setError',
//         payload 
//     }
// }

// export const addPosts = (payload)=>{
//     return{
//         type: 'postDetails/addPosts',
//         payload 
//     }
// }


// export const deletePosts = (payload)=>{
//     return{
//         type: 'postDetails/deletePosts',
//         payload 
//     }
// }
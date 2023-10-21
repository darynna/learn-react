// import { combineReducers, createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { postDetailsReducer } from "./postDetailsReducer";
// import { configureStore } from "@reduxjs/toolkit";



// // const rootReducer = combineReducers({
// //     postDetails: postDetailsReducer,
// // })
// // const enhancer = devToolsEnhancer();

// // export const store = createStore(rootReducer, enhancer);


// // export const store = configureStore({
// // reducer:{
// //     postDetails: postDetailsReducer
// // }}
// // )


// // const deposit = (amount)=>{
// //     return{
// //         type: 'deposit',
// //         payload: {amount}
// // }
// // };


// // function fundsReducer(state=0, action){
// //     switch(action.type){
// //         case 'deposit':
// //             return state + action.payload.amount
// //     default:
// //         return state
// //     }
// // }



// import { combineReducers } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// import storage from 'redux-persist/lib/storage';

// const postDetailsConfig = {
//     key: 'postDetails',
//     storage,
//     whitelist: ['posts']
// }

// export const store = configureStore({
//     reducer: {
//         postDetails: postDetailsReducer(postDetailsConfig, postDetailsReducer)
//     },
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       }),
//   });
  
//   export const persistor = persistStore(store);



  // ----------
  // const increment = creatAction("myValue/increment")
  // const dencrement = creatAction("myValue/dencrement")

  // const myReducer = creatReducer({num: 0}, {
    // [increment]: (state, action) => state + action.payload
    // [dencrement]: (state, action) => state - action.payload
  // })

  // const counterReducer = confucstore({
    //  reducer:{
      //  myValue: myReducer
    // }
  // })
  import { configureStore, createSlice } from "@reduxjs/toolkit";


  


  const UserSlice = createSlice({
    name: 'user',
    initialState: {
      login: '',
      isLoggedIn: false
    },
    reducers:{
       logIn(state, action){
        state.login = action.payload;
        state.isLoggedIn = true
       },
       logOut(state){
        state.login = '';
        state.isLoggedIn = false
       }
    }
})

export const {logIn, logOut} = UserSlice.actions



export const store = configureStore({
  reducer:{
    user: UserSlice.actions
  },
})
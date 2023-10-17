// // import Counter from './Counter/Counter'
// // import { Container } from './App.styled'
// // import Dropdown from './Dropdown'
// // import ColorPicker from './ColorPicker'
// import { ToDoList } from './ToDoList/ToDoList'
// import React from 'react';
// import Modal from './Modal';
// import TabsDate from '../tabs.json';
// import Tabs from './Tabs/Tabs';

// import { Component, useEffect, useState } from "react";
// import { OldSignupForm } from "./SignUpForm/SignupForm";

// // import Clock from './Clock/Clock';
// // import Form from './Form'
// // import { LoginForm } from "./LoginForm/LoginForm";

// // const colors = [
// //     {label: 'red', color: "F44336"},
// //     {label: 'green', color: "4CAF50"},
// //     {label: 'blue', color: "2196F3"},
// //     {label: 'pink', color: "E91E63"}
// // ]
//TODO LIST
// export class App extends React.Component{
//     state ={
//         todos: [
//             {id: 'td-1', text: "Learn javaScript", completed: false},
//             {id: 'td-2', text: "Practise javaScript", completed: true},
//             {id: 'td-3', text: "Rember javaScript", completed: false}
//         ],
//         showModal: false
//     };

//     deleToDo = (todoId) => {
//         this.setState(prevState => ({
//             todos: prevState.todos.filter(todo => todo.id !== todoId)
//         }))
//     }


//     formSubmithandler = data => {
//         console.log(data)
//     }

//     componentDidMount(){
//        const todos =  localStorage.getItem("todos")
//        const parsed = JSON.parse(todos)
//        if(parsed){
//         this.setState({todos: parsed})
//        }
  
//     }


//     componentDidUpdate(prevProps, prevState){
//      console.log("App componentDidUpdate")
//      if(this.state.todos !== prevState.todos){
//         console.log("Updated")
//         localStorage.setItem("todos", JSON.stringify(this.state.todos))
//      }
//     }


//     togleModal=()=>{
//         this.setState(({showModal}) => ({
//             showModal: !showModal,
//         }))
//     }

//     render(){
//         const {todos, showModal} = this.state;
//         const completedToDos = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0)
    
//         return (
//         <div>
//             <Tabs items={TabsDate}/>
//         <button type='button' onClick={this.togleModal}>Open modal</button>
//         {showModal && <Modal onClose={this.togleModal}>
//             <h1>Hello this is the component of the model</h1>
//             <p>Yeahhh.....</p>
//             <button type='button' onClick={this.togleModal}>Close modal</button>
//             </Modal>}
//         {/* <Form onSubmit={this.formSubmithandler}/> */}
//         <div>
//             <span>All: {todos.length}</span>
//             <span>Well done!!! {completedToDos}</span>
//         </div>
//         <ToDoList todos={todos} onDeleteToDo={this.deleToDo}/>
//         {/* <LoginForm/> */}
//         </div>
//         )
//     }
// }






// BOOKS

// import { Heading } from './Heading/Heading';
// import { Book } from './Books/Books.jsx';
// import BookForm from "./BookForm/BookForm";
// import ModalWindow from './ModalWindow/ModalWindow';

// import booksJson from './Books.json';

// import css from './App.module.css';
// import { Component } from 'react';

// const books = booksJson.books;

// console.log(booksJson)

// export class App extends Component{
//     state={
//         appBooks: books,
//         modal:{
//           isOpen: false,
//           data: null
//         }
//     }

//    handleAddBook = bookData =>{
//     if(this.state.appBooks.some(book => book.title === bookData.title)){
//         alert(`Ooops, book with title ${bookData.title} already exist`)
//         return
//     }

//     console.log("bookDate", bookData)

//     this.setState(prevState =>{return{
//        appBooks: [bookData, ...prevState.appBooks]
//     }})
//    }

//    onOpenModal = (modalData) =>{
// this.setState({
//   modal:{
//     isOpen: true,
//     data: modalData
//   }
// })
//    }

//    onCloseModal =()=>{
//     this.setState({
//       modal:{
//         isOpen: false,
//         data: null
//       }
//     })
//    }

//    componentDidMount(){
//     const stryngifiedBooks = localStorage.getItem("books")
//     const parsedBooks = JSON.parse(stryngifiedBooks) ?? [];
//     this.setState({
//       appBooks: parsedBooks
//     })
//    }

//    componentDidUpdate(prevProps, prevState){
//    if(this.state.appBooks.length !== prevState.appBooks.length){
//     console.log("Changes is state with appbook")
//     const stringifybooks = JSON.stringify(this.state.appBooks)
//     localStorage.setItem("books", stringifybooks)
//    }
//    }



//     render(){
//         return (
//             <div>
//               <Heading>React lesson 2, CSS</Heading>
//               <BookForm handleAddBook={this.handleAddBook}/>
//               <ul className={css.booksList}>
//                 {this.state.appBooks.map((book) => (
//                   <Book
//                     key={`${book.title}${book.author}`}
//                     title={book.title}
//                     author={book.author}
//                     year={book.year}
//                     genre={book.genre}
//                     favourite={book.favourite}
//                     cover={book.cover}
//                     onOpenModal={this.onOpenModal}
//                   />
//                 ))}
//               </ul>
//               {this.state.modal.isOpen && <ModalWindow data={this.state.modal.data} onClose={this.onCloseModal}/>}
//             </div>
//           );
//     }
// }


// // POKEMON 

// import { Component } from "react";
// import PokemonForm from "./PokemonForm/PokemonForm";
// import PokemonInfo from "./PokemonInfo/PokemonInfo";
// import { ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export class App extends Component{

//     state={
//         pokemonName: ''
//     }
    
//    handleSearchSubmit=(pokemonName)=>{
//      this.setState({
//         pokemonName: pokemonName
//      })
//    }

//     render(){
//         return(
//             <>
//             <PokemonForm onSubmit={this.handleSearchSubmit}/>
//             <ToastContainer/>
//             <PokemonInfo pokemonName={this.state.pokemonName}/>
//             </>
//         )
//     }
// }


//MATERIAL

// import { Component } from "react";
// import { MaterialsEditorForm } from "./MaterialsEditorForm/MaterialsEditorForm";
// import * as API from '../services/api'
// import { Materials } from "./Materials/Materials";


// export default class App extends Component{
//     state={
//         materials: [],
//         isloading: false,
//         error: false
//     }

//     async componentDidMount(){
//         try {
//             this.setState({isloading: true})
//             const materials = await API.getMaterials();
//             this.setState({materials: [...materials], isloading: false})
//         } catch (error) {
//             this.setState({error: true, isloading: false})
//             console.log(error)
//         }
//     }

//      addMaterials = async(values) =>{
//         try {
//         this.setState({isloading: true})
//         const materials = await API.addMaterials(values);
//         this.setState(states => ({
//             materials: [...states.materials, materials], isloading: false
//         }))
//         console.log(materials)
//         } catch (error) {
//             this.setState({error: true, isloading: false})
//             console.log(error)
//         }
//     }

//     deleteMaterial = async(id) =>{
//       try {
//         await API.deleteMaterial(id);
//       this.setState(state=>({
//         materials: state.materials.filter(material => material.id !== id)
//       }))
//       } catch (error) {
//         this.setState({error: true, isloading: false})
//             console.log(error)
//       }
//     }

//     updateMaterial = async fields =>{
//        try {
//         const uptadeMaterial = await API.updateMaterial(fields)
//        this.setState(state=>({
//         materials: state.materials.map(material => material.id === fields.id ? uptadeMaterial : material)
//        }))
//        } catch (error) {
//         this.setState({error: true, isloading: false})
//             console.log(error)
//        }
//     }
    
//         render(){
//             console.log(this.state.materials)
//             return( <><MaterialsEditorForm onSubmit={this.addMaterials}/>
//             {this.state.isloading && <p>Loading...</p>}
//             {this.state.error && <p>Error</p>}
//             <Materials items={this.state.materials} onDelete={this.deleteMaterial} onUpdate={this.updateMaterial}/>
//             </>
//             )
//         }
//     }



// lesson 3 with json placeholder 
// import { useState, useEffect } from "react";
// import { StyledAppContainer } from "./App.styled";
// import { fetchPosts, findPostById } from "services/apii";

// export const App =()=>{
// //     state={
// //         post:  null,
// //         loading: false,
// //         error: null,
// //         searchedPostId: null
// //     }

//     const [posts, setPosts] = useState(null)
//     const [isLoading, setIsLoading] = useState(false)
//     const [error, setError] = useState(null);
//     const [searchedPostId, setSearchedPostId] = useState(null)

//     const fetchAllPosts= async()=>{
//         try {
//            setIsLoading(true)
//            const posts = await fetchPosts()
//            setPosts(posts)

//         } catch (error) {
//             setError(error.message)
//         }finally{
//             setIsLoading(false)
//         }
//     }

//     useEffect(()=> {
//         if(!searchedPostId){
//             return
//         }
//         const fetchPostById = async()=>{
//             try {
//                 setIsLoading(true)
//                 const post = await findPostById(searchedPostId)
    
//                 setPosts([post])
//             } catch (error) {
//                 setError(error.message)
//             }finally{
//                 setIsLoading(false)
//             }
//         }
    
//         fetchPostById();
//     }, [searchedPostId])

//     useEffect(()=>{
//         fetchAllPosts()
//     }, [])

//     const handleSearchsubmit = (event)=>{
//         event.preventDefault();
//         const searchedPostIdValue = event.currentTarget.elements.searchPostId.value
//         setSearchedPostId(searchedPostIdValue)

//         event.currentTarget.reset()
//     }
//         const showpost = Array.isArray(posts) && posts.length

//         return(
//             <StyledAppContainer>
//             <h1>App title</h1>
//             {isLoading && <div>
//                 <p>Loading...</p>
//             </div>}
//             <form onSubmit={handleSearchsubmit}>
//                 <label>Enter post Id to find one
//                     <input 
//                     type="text"
//                     name="searchPostId"
//                      />
//                 </label>
//                 <button type="submit">Submit</button>
//                 <button type="submit" onClick={fetchAllPosts}>Reset</button>
//             </form>
//             {error && <p>{error}</p>}
//             <ul className="postList">
//                 {showpost && posts.map((post) => {return(<li className="postListItem">
//                     <span>Id: {post.id}</span><br />
//                     <span >Title: {post.title}</span><br />
//                     <span >User: {post.userId}</span><br />
//                     <span >Body: {post.body}</span><br />
//                 </li>)})}
//             </ul>
//             </StyledAppContainer>
//         )
// }

// // Module 4
// // import SignupForm from "./SignUpForm/SignupForm";
// // import Clock from "./Clock/Clock";
// // import ColorPicker from "./ColorPicker";
// // import Counter from "./Counter/Counter";
// import DetailsSection from "./DetailsSection/DetailsSection";
// // const colors = [
// //     {label: 'red', color: "F44336"},
// //     {label: 'green', color: "4CAF50"},
// //     {label: 'blue', color: "2196F3"},
// //     {label: 'pink', color: "E91E63"}
// // ]
// export default class App extends Component{
//     render(){
//         return (
// <DetailsSection/>
//         )
//     }
// }




// POKEMON 

// import { useState } from "react";
// import PokemonForm from "./PokemonForm/PokemonForm";
// import PokemonInfo from "./PokemonInfo/PokemonInfo";
// import { ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const App =()=>{


//     const [pokemonName, setPokemonName] = useState('')

//         return(
//             <>
//             <PokemonForm onSubmit={setPokemonName}/>
//             <ToastContainer/>
//             <PokemonInfo pokemonName={pokemonName}/>
//             </>
//         )

// }
// import Counter from "./Counter/Counter"
// import Friends from "./Friends/Friends"
// import UseRefComp from "./useRef/useRef"
import {Route, Routes, NavLink } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import PostsPage from 'pages/PostsPage';

import { StyledAppContainer } from './App.styled';
import SearchPage from 'pages/SearchPage';
import PostDetailsPage from 'pages/PostDetailsPage';


// Маршрутизація:

//  <a href="www.google.com">Google</a> - будь-які посилання на зовнішні ресурси, 
//  поза нашим додатком

//  <Link to="/some-route">Some page</Link>
//  <NavLink to="/some-route"> Some page</NavLink> - для маршутизації по нашому додатку

//   1. Зміна адресної строки браузера.
//   2. Підготувати Route для відображення, тієї чи іншої сторінки 
//      <Route path="/some-route" element={<HomePage />} />



export const App = () => {
  return (
      <StyledAppContainer>
        <header>
          <nav>
            <NavLink className="header-link" to="/">
              Home
            </NavLink>
            <NavLink className="header-link" to="/posts">
              Posts
            </NavLink>
            <NavLink className="header-link" to="/search">
              Search
            </NavLink>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/posts' element={<PostsPage />}/>
          <Route path='/search' element={<SearchPage />}/>
          <Route path='/post-details/:postId/*' element={<PostDetailsPage />}/>
        </Routes>
      </StyledAppContainer>
  );
};

// import Home from 'pages2/Home';
// import Dogs from 'pages2/Dogs';
// import DogDetails from 'pages2/DogDetails';
// import { Layout } from './Layout';
// import { Gallery } from './Gallery/Gallery';
// import { lazy } from 'react';

// const Home = lazy(() => import('../pages2/Home'))
// const Dogs = lazy(() => import('../pages2/Dogs'))
// const DogDetails= lazy(() => import('../pages2/DogDetails'))
// const Gallery = lazy(() => import('./Gallery/Gallery'))
// const Layout= lazy(() => import('./Layout'))

// export const App = () => {
//   return (
    
//     <Routes>
//       <Route path='/' element={<Layout/>}>
//       <Route index element={<Home/>}/>
//       <Route path='dogs' element={<Dogs/>}/>
//       <Route path='dogs/:dog' element={<DogDetails/>}>
//         <Route path='breeds' element={<div>Breeds</div>}/>
//         <Route path='gallery' element={<Gallery/>}/>
//       </Route>
//       </Route>
//     </Routes>
  
//   );
// };
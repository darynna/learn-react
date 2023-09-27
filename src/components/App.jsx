// // import Counter from './Counter/Counter'
// // import { Container } from './App.styled'
// // import Dropdown from './Dropdown'
// // import ColorPicker from './ColorPicker'
// import { ToDoList } from './ToDoList/ToDoList'
// import React from 'react';
// import Modal from './Modal';
// import TabsDate from '../tabs.json';
// import Tabs from './Tabs/Tabs';

// // import Clock from './Clock/Clock';
// // import Form from './Form'
// // import { LoginForm } from "./LoginForm/LoginForm";

// // const colors = [
// //     {label: 'red', color: "F44336"},
// //     {label: 'green', color: "4CAF50"},
// //     {label: 'blue', color: "2196F3"},
// //     {label: 'pink', color: "E91E63"}
// // ]

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








import { Heading } from './Heading/Heading';
import { Book } from './Books/Books.jsx';
import BookForm from "./BookForm/BookForm";
import ModalWindow from './ModalWindow/ModalWindow';

import booksJson from './Books.json';

import css from './App.module.css';
import { Component } from 'react';

const books = booksJson.books;

console.log(booksJson)

export class App extends Component{
    state={
        appBooks: books,
        modal:{
          isOpen: false,
          data: null
        }
    }

   handleAddBook = bookData =>{
    if(this.state.appBooks.some(book => book.title === bookData.title)){
        alert(`Ooops, book with title ${bookData.title} already exist`)
        return
    }

    console.log("bookDate", bookData)

    this.setState(prevState =>{return{
       appBooks: [bookData, ...prevState.appBooks]
    }})
   }

   onOpenModal = (modalData) =>{
this.setState({
  modal:{
    isOpen: true,
    data: modalData
  }
})
   }

   onCloseModal =()=>{
    this.setState({
      modal:{
        isOpen: false,
        data: null
      }
    })
   }

   componentDidMount(){
    const stryngifiedBooks = localStorage.getItem("books")
    const parsedBooks = JSON.parse(stryngifiedBooks) ?? [];
    this.setState({
      appBooks: parsedBooks
    })
   }

   componentDidUpdate(prevProps, prevState){
   if(this.state.appBooks.length !== prevState.appBooks.length){
    console.log("Changes is state with appbook")
    const stringifybooks = JSON.stringify(this.state.appBooks)
    localStorage.setItem("books", stringifybooks)
   }
   }



    render(){
        return (
            <div>
              <Heading>React lesson 2, CSS</Heading>
              <BookForm handleAddBook={this.handleAddBook}/>
              <ul className={css.booksList}>
                {this.state.appBooks.map((book) => (
                  <Book
                    key={`${book.title}${book.author}`}
                    title={book.title}
                    author={book.author}
                    year={book.year}
                    genre={book.genre}
                    favourite={book.favourite}
                    cover={book.cover}
                    onOpenModal={this.onOpenModal}
                  />
                ))}
              </ul>
              {this.state.modal.isOpen && <ModalWindow data={this.state.modal.data} onClose={this.onCloseModal}/>}
            </div>
          );
    }
}

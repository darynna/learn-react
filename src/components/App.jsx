// import Counter from './Counter/Counter'
// import { Container } from './App.styled'
// import Dropdown from './Dropdown'
// import ColorPicker from './ColorPicker'
// import { ToDoList } from './ToDoList/ToDoList'
import React from 'react';
// import Form from './Form'
import { LoginForm } from "./LoginForm/LoginForm";

// const colors = [
//     {label: 'red', color: "F44336"},
//     {label: 'green', color: "4CAF50"},
//     {label: 'blue', color: "2196F3"},
//     {label: 'pink', color: "E91E63"}
// ]

export class App extends React.Component{
    state ={
        todos: [
            {id: 'td-1', text: "Learn javaScript", completed: false},
            {id: 'td-2', text: "Practise javaScript", completed: true},
            {id: 'td-3', text: "Rember javaScript", completed: false}
        ],
    };

    deleToDo = (todoId) => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== todoId)
        }))
    }


    formSubmithandler = data => {
        console.log(data)
    }

    render(){
        // const {todos} = this.state;
        // const completedToDos = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0)
    
        return (
        // <>
        // <Form onSubmit={this.formSubmithandler}/>
        // <div>
        //     <span>All: {todos.length}</span>
        //     <span>Well done!!! {completedToDos}</span>
        // </div>
        // <ToDoList todos={todos} onDeleteToDo={this.deleToDo}/></>
        <LoginForm/>
        )
    }
}








// import { Heading } from './Heading/Heading';
// import { Book } from './Books/Books.jsx';
// import BookForm from "./BookForm/BookForm"

// import booksJson from './Books.json';

// import css from './App.module.css';
// import { Component } from 'react';

// const books = booksJson.books;

// console.log(booksJson)

// export class App extends Component{
//     state={
//         appBooks: books
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
//                   />
//                 ))}
//               </ul>
//             </div>
//           );
//     }
// }

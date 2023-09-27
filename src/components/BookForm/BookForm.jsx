import React, { Component } from "react";

export default class BookForm extends Component {
  state = {
    title: "",
    author: "",
    year: "",
    genre: "",
    favourite: false,
  };

  handleInoutChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const bookData = {
      ...this.state,
      year: Number.parseInt(this.state.year),
      cover: "https://images.gr-assets.com/books/1424030967l/5129.jpg",
    };
    this.props.handleAddBook(bookData);
    this.setState({
      title: "",
      author: "",
      year: "",
      genre: "",
      favourite: false,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>BookForm</h2>
        <label>
          <p>Title: </p>
          <input
            value={this.state.title}
            name="title"
            type="text"
            onChange={this.handleInoutChange}
            required
          />
        </label>
        <label>
          <p>Author: </p>
          <input
            value={this.state.author}
            name="author"
            type="text"
            onChange={this.handleInoutChange}
            required
          />
        </label>
        <label>
          <p>Year: </p>
          <input
            value={this.state.year}
            name="year"
            type="text"
            onChange={this.handleInoutChange}
            required
          />
        </label>
        <label>
          <p>Genre: </p>
          <input
            value={this.state.genre}
            name="genre"
            type="text"
            onChange={this.handleInoutChange}
            required
          />
        </label>
        <label>
          <p>Is this book favourite?</p>
          <input
            checked={this.state.favourite}
            name="favourite"
            type="checkbox"
            onChange={this.handleInoutChange}
          />
        </label>
        <button type="submit">Add book</button>
      </form>
    );
  }
}

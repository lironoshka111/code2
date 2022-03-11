import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";
import { getBooks } from "./services/booksService";
function App() {
  const [books, setBooks] = useState(null);

  const fetchData = async () => {
    const booksApi = await getBooks();
    console.log(booksApi.data);
    setBooks(booksApi.data);
  };

  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button onClick={fetchData} className="fetch-button">
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}

      {books &&
        books.map((book, index) => {
          const cleanedDate = new Date(book.released).toDateString();

          return (
            <div className="books" key={index + 1}>
              <div className="book">
                <h3>Book Number: {index}</h3>
                <h2>Book Name: {book.name}</h2>

                <div className="details">
                  <p>👨: Author/Authors: {book.authors.join(" ")}</p>
                  <p>📖: Number of pages: {book.numberOfPages}</p>
                  <p>🏘️: Book Country: {book.country}</p>
                  <p>⏰: Release date: {cleanedDate}</p>
                </div>
              </div>
            </div>
          );
        })}

      <ScotchInfoBar seriesNumber="7" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

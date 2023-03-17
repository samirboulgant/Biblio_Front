import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [books, setBooks] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    const results = await axios.get("http://localhost:8090/books/");
    setBooks(results.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8090/books/${id}`);
    getAllBooks();
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Year</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => {
              return (
                <tr key={book.id}>
                  <th scope="row">{book.id}</th>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.year}</td>
                  <td>
                    <Link
                      className="btn btn-primary mx-2"
                      to={`/Viewbook/${book.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/editbook/${book.id}`}
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteUser(book.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

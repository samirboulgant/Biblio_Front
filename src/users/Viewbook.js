import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Viewbook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    year: "",
  });

  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const results = await axios.get(`http://localhost:8090/books/${id}`);
    setBook(results.data);
  };

  return (
    <div className="card mt-20 mx-auto" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Book Information</h5>
        <div className="card-text">
          <div>Title : {book.title}</div>
          <div>Author : {book.author} </div>
          <div>Year of publication: {book.year} </div>
        </div>
        <a href="/" className="btn btn-primary">
          Go Home
        </a>
      </div>
    </div>
  );
}

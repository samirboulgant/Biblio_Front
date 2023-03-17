import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    year: "",
  });
  const { title, author, year } = book;

  let navigate = useNavigate();

  const onInputChange = (e) => {
    console.log("hello");
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const onAddClick = async (e) => {
    e.preventDefault();
    const results = await axios.post("http://localhost:8090/books/", book);
    navigate("/");
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card text-black shadow"
                style={{ borderRadius: "25px" }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Create User
                      </p>

                      <form
                        className="mx-1 mx-md-4"
                        onSubmit={(e) => onAddClick(e)}
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-book fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              className="form-control"
                              name="author"
                              value={book.author}
                              onChange={onInputChange}
                            />
                            <label className="form-label"></label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              className="form-control"
                              name="title"
                              value={title}
                              onChange={(e) => onInputChange(e)}
                            />
                            <label className="form-label">Author</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              className="form-control"
                              name="year"
                              value={year}
                              onChange={(e) => onInputChange(e)}
                            />
                            <label className="form-label">year</label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-outline-dark mr-2"
                          >
                            Add User
                          </button>
                          <div className="col-sm-1 col-xs-1 col-md-1 col-lg-1"></div>
                          <Link className="btn btn-outline-danger" to="/">
                            Cancel
                          </Link>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image to show form"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

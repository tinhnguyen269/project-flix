import React, {useEffect, useState} from "react";
import * as movieService from "../admin/services/MovieService";
import ModalDetailMovie from "./ModalDetailMovie";

const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const getAllMovies = async () => {
            try {
                let movies = await movieService.getAllMovies();
                setMovies(movies);
            } catch (e) {
                console.log("loi lay danh sach movie");
            }
        }
        getAllMovies();
    }, []);

    const handleShowModal = (movie) => {
        setSelectedMovie(movie);
        setShow(true);
    }
    const handleCloseModal = () => {
        setSelectedMovie(null);
        setShow(false);
    }
    return (
        <div>
            <div className="container-fluid pt-4 px-4">
                <div className="col-12">
                    <div className="bg-secondary rounded h-100 p-4">
                        <form className="d-md-flex justify-content-between">
                            <input
                                className="form-control bg-dark border-0 search-input"
                                type="search"
                                placeholder="Search"
                            />
                            <button className="btn btn-success ms-2">Add</button>
                        </form>

                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Rating</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Quality</th>
                                    <th scope="col">Detail</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {movies.map((movie, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{movie.title}</td>

                                        {/* Hiển thị tất cả các category */}
                                        <td>
                                            {movie.categories.map((cat, catIndex) => (
                                                <span key={catIndex}>
                                                {cat.category.category}
                                                    {catIndex < movie.categories.length - 1 && ", "}
                                            </span>
                                            ))}
                                        </td>

                                        <td>{movie.rating}</td>
                                        <td>{movie.duration}</td>
                                        <td>{movie.quantity}</td>

                                        <td>
                                            <button className="btn btn-info" onClick={()=>handleShowModal(movie)}>
                                                <i className="bi bi-info-circle"></i>
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-warning">
                                                <i className="bi bi-pencil"></i>
                                            </button>
                                            <button className="btn btn-danger">
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <ModalDetailMovie
                show={show}
                handleClose={handleCloseModal}
                movieDetail={selectedMovie}
            />
        </div>
    );
};

export default Movie;

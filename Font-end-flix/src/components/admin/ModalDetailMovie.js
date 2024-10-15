import {Button, Modal} from "react-bootstrap";
import React from "react";

const ModalDetailMovie = ({show, handleClose, movieDetail}) => {
    return (
        <Modal show={show && !!movieDetail} onHide={handleClose} backdrop="static" centered>
            <Modal.Header closeButton className="bg-secondary text-white">
                <Modal.Title style={{ color: 'red'}}>{movieDetail?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-secondary text-white">
                {movieDetail ? (
                    <>
                        <div className="row justify-content">
                            <div className="col-12">
                                <img
                                    src={movieDetail.image}
                                    alt="anh chinh"
                                    style={{width: '100%', height: 'auto', margin: 'auto'}}
                                />
                            </div>
                            <h4>Short screen</h4>

                            {movieDetail.shortScreens.map((screen, screenIndex) => (
                                <div key={screenIndex} className="col-6 mb-4">
                                    <div className="d-flex justify-content-center">
                                        <img
                                            src={screen.shortScreen}
                                            alt={`Screenshot ${screenIndex}`}
                                            style={{width: '100%', height: 'auto', objectFit: 'contain'}}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <table className="table" style={{marginTop: '20px', color: '#fff'}}>
                            <tbody>
                            <tr>
                                <th scope="row">Description</th>
                                <td>{movieDetail.description}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{width: '30%'}}>Category</th>
                                <td>
                                    {movieDetail.categories.map((cat, catIndex) => (
                                        <span key={catIndex}>
                                        {cat.category.category}
                                            {catIndex < movieDetail.categories.length - 1 && ', '}
                                    </span>
                                    ))}
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Rating</th>
                                <td>{movieDetail.rating}</td>
                            </tr>
                            <tr>
                                <th scope="row">Duration</th>
                                <td>{movieDetail.duration}</td>
                            </tr>
                            <tr>
                                <th scope="row">Quantity</th>
                                <td>{movieDetail.quantity}</td>
                            </tr>
                            </tbody>
                        </table>
                    </>
                ) : (
                    <p className="text-center">No Details Found</p>
                )}
            </Modal.Body>
            <Modal.Footer className="bg-secondary">
                <Button variant="light" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>


    );
}
export default ModalDetailMovie;
import React from "react";

const SavedList = (props) => {
    return (
        <div className="container">
            <h2>Your Saved Books!</h2>
            <div className="text-left mt-5">
                {props.books.map((element, index) => (
                    <div key={index} className="my-4 row">
                        <img
                        className="col-sm-2"
                        style={{ maxHeight: "13rem", maxWidth: "10rem" }}
                        src={element.image}
                        alt="Book cover preview"
                        />
                        <div className="col-sm-10">
                            <h5 className="card-title">{element.title}</h5>
                            <p>
                                <strong>{element.author}</strong>
                            </p>
                            <p className="card-text">{element.description}</p>
                            <a
                                href={element.link}
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                More info
                            </a>
                            <button
                                className="btn btn-danger mx-3"
                                onClick={() => {
                                    props.commitDelete(element._id);
                                }}
                            >
                                Delete from List
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SavedList;
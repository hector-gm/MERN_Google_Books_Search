import React from "react";

const QueryResults = (props) => {
    return (
        <div className="container">
            <h3>Your Query's Results</h3>
            <div className="text-left mt-5">
                {props.results.map((element, index) => (
                    <div key={index} className="my-4 row">
                        <img
                        className="col-sm-2"
                        style={{ maxWidth: "10rem", maxHeight: "13rem" }}
                        src={
                            element.volumeInfo.imageLinks
                            ? element.volumeInfo.imageLinks.smallThumbnail
                            : "https://cdn4.iconfinder.com/data/icons/core-ui-outlined/32/outlined_placeholder-512.png"
                        }
                        alt="Book Cover preview"
                        />
                        <div className="col-sm-10">
                            <h4 className="card-title">{element.volumeInfo.title}</h4>
                            <h5>
                                <strong>
                                    {element.volumeInfo.authors
                                    ? element.volumeInfo.authors.join(", ")
                                : "No author listed"}
                                </strong>
                            </h5>
                            <p className="card-text">
                                {element.volumeInfo.description
                                ? element.volumeInfo.description
                                : "No title description available"}
                            </p>
                            <a
                                href={element.volumeInfo.canonicalVolumeLink}
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                More info
                            </a>
                            <button
                            className="btn btn-primary mx-3"
                            onClick={() => {
                                props.save({
                                    title: element.volumeInfo.title,
                                    author: element.volumeInfo.author
                                    ? element.volumeInfo.author.join(", ")
                                    : "No author listed",
                                    description: element.volumeInfo.description
                                    ? element.volumeInfo.description
                                    : "No description available",
                                    image: element.volumeInfo.imageLinks
                                    ? element.volumeInfo.imageLinks.smallThumbnail
                                    : "https://cdn4.iconfinder.com/data/icons/core-ui-outlined/32/outlined_placeholder-512.png",
                                    link: element.volumeInfo.canonicalVolumeLink,
                                });
                            }}
                            >
                            Save to list
                        </button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};
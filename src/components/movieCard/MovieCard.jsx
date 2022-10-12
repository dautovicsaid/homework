import React from 'react';

const MovieCard = ({name, year, genre, actors,image}) => {
    return (
        <div className="col-6 offset-3 mb-5">
            <div className="card">
                <img src={image}
                     style={{height : '400px',objectFit: "fill" }}
                     className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className="row">
                        <div className="col-4 offset-2">
                            <p className="card-text">{genre}</p>
                        </div>
                        <div className="col-4">
                            <p className="card-text">{year}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 offset-2">
                        <p className="card-text">
                            {actors.join(", ")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;
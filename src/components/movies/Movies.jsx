import React from 'react';
import {moviesList} from "../../constants/constants";
import MovieCard from "../movieCard/MovieCard";
import {Row} from "antd";

const Movies = () => {
    return <>
        <div style={{marginTop: "50px"}}>
            <Row gutter={[0, 32]}>
                {moviesList.map(movie => {
                    return <MovieCard
                        key={movie.key}
                        id={movie.id}
                        name={movie.name}
                        year={movie.year}
                        genre={movie.genre}
                        image={movie.image}
                        actors={movie.actors}/>

                })}

            </Row>
        </div>
    </>

}

export default Movies;
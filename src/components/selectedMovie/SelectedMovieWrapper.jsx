import React from 'react';
import {useAppData} from "../../context/AppContext";
import SelectedMovie from "./SelectedMovie";

const SelectedMovieWrapper = () => {
    const {selectedMovie} = useAppData();

    return <div className="col-6">
        {selectedMovie ?
            <SelectedMovie movie={selectedMovie}/> : <p>No movie selected!</p>
        }
    </div>
}

export default SelectedMovieWrapper;


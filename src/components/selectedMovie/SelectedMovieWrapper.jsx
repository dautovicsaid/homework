import React from 'react';
import {useAppData} from "../../context/AppContext";
import SelectedMovie from "./SelectedMovie";
import {Col} from "antd";

const SelectedMovieWrapper = () => {
    const {selectedMovie} = useAppData();

    return <Col span={10} offset={2}>
        {selectedMovie &&
        <SelectedMovie movie={selectedMovie}/>
        }
    </Col>
}

export default SelectedMovieWrapper;


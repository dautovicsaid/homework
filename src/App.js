import './App.css';
import AppProvider from "./context/AppContext";
import 'bootstrap/dist/css/bootstrap.css';
import MoviesTable from "./components/moviesTable/MoviesTable";
import React from "react";
import { Col, Row } from 'antd';
import SelectedMovieWrapper from "./components/selectedMovie/SelectedMovieWrapper";


function App() {
    return (
        <div className="App">
            <AppProvider>
                <Row style={{padding: '50px 0'}}>
                    <Col span={18} offset={4}>
                        <Row>
                            <MoviesTable/>
                            <SelectedMovieWrapper/>
                        </Row>
                    </Col>
                </Row>
            </AppProvider>
        </div>
    );
}

export default App;

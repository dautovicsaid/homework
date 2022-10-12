import './App.css';
import AppProvider from "./context/AppContext";
import 'bootstrap/dist/css/bootstrap.css';
import MoviesTable from "./components/moviesTable/MoviesTable";
import React from "react";
import SelectedMovieWrapper from "./components/selectedMovie/SelectedMovieWrapper";


function App() {
    return (
        <div className="App">
            <AppProvider>
                <div className="row mt-5">
                    <div className="col-8 offset-2">
                        <div className="row">
                            <MoviesTable/>
                            <SelectedMovieWrapper/>
                        </div>
                    </div>
                </div>
            </AppProvider>
        </div>
    );
}

export default App;

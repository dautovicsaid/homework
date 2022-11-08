import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import SelectedMovie from "./components/selectedMovie/SelectedMovie";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import Movies from "./components/movies/Movies";
import SelectedUser from "./components/selectedUser/SelectedUser";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Navbar/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="users" element={<Users/>}/>
            <Route path="movies" element={<Movies/>}/>
            <Route path="movies/:id" element={<SelectedMovie/>}/>
            <Route path="users/:id" element={<SelectedUser/>}/>
        </Route>
    ))

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;

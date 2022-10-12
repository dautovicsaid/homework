import {createContext, useContext, useEffect, useState} from "react";
import {usersList} from "../constants/constants";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [selectedMovie, setSelectedMovie] = useState(null)

    const onMovieSelect = (movieData) => {
        const usersWatched = usersList.filter(user => user.movies.includes(movieData.id))

        setSelectedMovie({
            ...movieData,
            usersWatched: usersWatched
        })
    }

    useEffect(() => {
    }, [selectedMovie])

    const data = {
        selectedMovie: selectedMovie,
        setSelectedMovie: (e) => onMovieSelect(e)
    }

    return <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>
}

export const useAppData = () => {
    return useContext(AppContext);
}

export default AppProvider;
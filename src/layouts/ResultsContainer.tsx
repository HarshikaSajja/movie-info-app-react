import React from 'react'
import { useSelector } from 'react-redux'
import ResultsCard from '../components/ResultsCard'
import { AppState } from '../reducers'
import { ISearchReducer } from '../reducers/searchReducer'
import { OmdbMovie } from '../actions/types'

const MoviesContainer:React.FC = (): JSX.Element => {
    const {movies: moviesList, responseFound}:ISearchReducer = useSelector((state:AppState) => state.movies)
    
    return (
        <section className="d-flex flex-row justify-content-around flex-wrap"> 
        {responseFound ? moviesList.map((movie) => {
            return <ResultsCard key={movie.imdbID}
                         movie={movie}/>
        })
        : <p style={{color:'white', fontSize:'1.5rem',fontWeight:'bold'}}>No results found</p>}
        </section>
    )
}

export default MoviesContainer;
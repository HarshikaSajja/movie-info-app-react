import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import InfoPage from '../pages/InfoPage';
import { OmdbMovie } from '../actions/types'

interface IResultsCard {
    movie: OmdbMovie
}

const MovieCard: React.FC<IResultsCard> = (props): JSX.Element => {
    const {Title, Year, Poster, imdbID, Type} = props.movie;
    const [showDetails, showDetailsBtn] = useState<boolean>(false)

    const onMouseEnterHandler = () => {
        showDetailsBtn(true)
    }

    const onMouseLeaveHandler = () => {
        showDetailsBtn(false)
    }

    return (
            <div className="card custom-card" onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
                <img className="card-img-top custom-card-img-top" src={Poster} alt="Card image"/>
                <div className="card-body custom-card-body">
                    <h4 className="card-title">{Title}</h4>                   
                    {showDetails ? <Link className="btn btn-light" to={`/details/${Type}/${imdbID}`} render={<InfoPage/>}>See details</Link> : <p className="card-text">{Year}</p>}
                </div>
            </div>
    )
}

export default MovieCard
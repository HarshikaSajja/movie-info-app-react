import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getDetails } from '../actions/details'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../reducers'
import { IDetailsReducer } from '../reducers/detailsReducer'
import { IMovieDetails } from '../actions/types'

const MovieDetails: React.FC = (): JSX.Element => {
    const { id } = useParams<string>();
    let history = useHistory();
    const {movieDetails, loadingDetails: loading}:IDetailsReducer = useSelector((state:AppState) => state.details)
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getDetails(id))
    }, [id])

    const { Genre, Released, imdbRating, Director, Writer, Actors, Title, Plot, Poster}:IMovieDetails = movieDetails;

    const goBackHandler = () => {
        history.push('/home');
    }

    return (
        <main>
        {loading ? <p>Loading.....</p> : 
            <section className="d-flex flex-row justify-content-around flex-wrap">
                <div className="row w-75 custom-row">
                    <div className="col-md-4 custom-col-md-4">
                        <img className="card-img-top" src={Poster}/>
                    </div>

                    <div className="col-md-8 bg-light custom-col-md-8">
                        <h2>{Title}</h2>
                        <p>{Plot}</p>
                        <ul className="list-group">
                            <li className="list-group-item"><strong>Genre:&nbsp;</strong>{Genre}</li>
                            <li className="list-group-item"><strong>Released:&nbsp;</strong>{Released}</li>
                            <li className="list-group-item"><strong>IMDB Rating:&nbsp;</strong>{imdbRating}/10</li>
                            <li className="list-group-item"><strong>Director:&nbsp;</strong>{Director}</li>
                            <li className="list-group-item"><strong>Writer:&nbsp;</strong>{Writer}</li>
                            <li className="list-group-item"><strong>Cast:&nbsp;</strong>{Actors}</li>
                        </ul>
                        <div className="d-flex justify-content-center flex-wrap">
                        <button className="btn-links">
                        <a className="btn btn-dark" href={`https://www.imdb.com/title/${id}`} target="_blank">View on IMDB</a>
                        </button>
                        <button type="button" className="btn btn-dark btn-links" onClick={goBackHandler}>Go Back to Search</button>
                        </div>
                    </div>
                </div>
            </section>
        }
        </main>
    )
}

export default MovieDetails;
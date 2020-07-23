import React, { useState, useEffect } from 'react'
import InfoPage from '../pages/InfoPage'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const RelatedResults: React.FC = (): JSX.Element => {
    const relatedResultIds:any = []
    const { id } = useParams()
    const {movies: moviesList} = useSelector(state => state.movies)
    const [relatedResults, setRelatedResults] = useState([])

    useEffect(() => {
        for (const imdbId of moviesList) {
            if(id === imdbId['imdbID']){
                continue
            }else {
                relatedResultIds.push({id: imdbId['imdbID'], type: imdbId['Type'], poster: imdbId['Poster'], title: imdbId['Title']})
            }
        }
        const displayRelatedResults = relatedResultIds.slice(Math.max(relatedResultIds.length - 6));
        setRelatedResults(displayRelatedResults);
    }, [id])

    return (
        <section>
            <div className="container-fluid bg-secondary">
            <h2>Related</h2>
            <div className="row justify-content-around flex-nowrap" style={{overflowX:'scroll',paddingBottom:'25px'}}>
                {relatedResults.map(movie => (
                    <div key={movie['id']} className="col-3">
                    <div className="card card-block">
                        <Link className="btn btn-light" to={`/details/${movie['type']}/${movie['id']}`} render={<InfoPage/>}>
                            <img className="card-img-top" src={movie['poster']} height="300rem" alt="Card image"/>
                            <p className="card-text font-weight-bold">{movie['title']}</p>
                        </Link>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
    )
}

export default RelatedResults;

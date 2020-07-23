import React, { useEffect } from 'react'
import { getNowPlayingList } from '../actions/search'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../reducers'
import { ISearchReducer } from '../reducers/searchReducer'
import { PlayingNow as IPlayingNow } from '../actions/types'

const baseImgUrl = 'https://image.tmdb.org/t/p/w500';
let nowPlayingList = [] as IPlayingNow[];

const PlayingNow: React.FC = (): JSX.Element => {
    const {nowPlaying: playingNow}:ISearchReducer = useSelector((state:AppState) => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNowPlayingList());
    }, [])

    const getTrimmedList = () => {
        nowPlayingList  = playingNow.slice(1,7)
    }

    return (
        <section className="col-md-8 bg-secondary">
            {getTrimmedList()}
              <div className="h-100 w-100 bg-secondary playing-now">
                <h3>Now Playing</h3>
                {nowPlayingList.map((result) => 
                <div key={result.id} className="card playing-now-card">
                <div style={{display:'flex', flex:'1 1 auto'}}>
                    <div className="img-square-wrapper">
                        <img className="card-img-top poster" src={`${baseImgUrl}${result.poster_path}`} alt="Card image cap"/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{result.title}</h4>
                        <p className="card-text">{result.overview}</p>
                    </div>
                </div>
                </div>)}
              </div>
            </section>
    )
}

export default PlayingNow;

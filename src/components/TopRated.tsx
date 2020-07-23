import React, { useEffect } from 'react'
import { getTrendingList } from '../actions/search'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../reducers'
import { ISearchReducer } from '../reducers/searchReducer'

const baseImgUrl:string = 'https://image.tmdb.org/t/p/w500';
let trendingPoster:string[] = [];

const TopRated:React.FC = (): JSX.Element => {
    const {trendingList}:ISearchReducer = useSelector((state:AppState) => state.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTrendingList())
    }, [])

    const getTredningPosters = () => {
        trendingList.slice(0,3).forEach((element) => {
            trendingPoster.push(element.poster_path)
        })
    }

    return (
      <div className="col-md-4" style={{}}>
        <div className="container w-100" style={{}}>
            {getTredningPosters()}
            <h3>Top Rated Movies</h3>
            <div id="demo" className="carousel slide" data-ride="carousel">
              <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>
                         
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={`${baseImgUrl}${trendingPoster[0]}`} alt="Trending Poster" width="480" height="600" style={{}}/>
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item">
              <img src={`${baseImgUrl}${trendingPoster[1]}`} alt="Trending Poster" width="480" height="600" style={{}}/>
              <div className="carousel-caption d-none d-md-block">
            </div>
            </div>
            <div className="carousel-item">
              <img src={`${baseImgUrl}${trendingPoster[2]}`} alt="Trending Poster" width="480" height="600" style={{}}/>
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
  
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
      </div>
      </div>
      </div>
    )
}

export default TopRated;

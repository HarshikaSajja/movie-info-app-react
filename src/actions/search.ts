import axios from 'axios'
import { omdbApiKey, tmdbApiKey } from '../config'
import { Constants, OmdbSearch, TmdbTrending, TmdbPlayingNow } from './types';
import { Dispatch } from 'redux'

export const searchMovie:Function = (movieName:string) => (dispatch:Dispatch<OmdbSearch>) => {
    axios.get(`http://www.omdbapi.com/?apikey=${omdbApiKey}&s=${movieName}`)
        .then(response => {
            if(response.data.Response === 'True'){
                dispatch({
                    type: Constants.SEARCH,
                    payload: response.data.Search,
                    responseFound: true
                })
            }else {
                dispatch({
                    type: Constants.SEARCH,
                    payload: [],
                    responseFound: false
                })
            }
        })
        .catch(error => console.log(error))
};

export const getTrendingList:Function = () => (dispatch:Dispatch<TmdbTrending>) => {
    axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${tmdbApiKey}`)
        .then(response => {
            dispatch({
                type: Constants.GET_TRENDING,
                payload: response.data.results,
                responseFound: true
            })
        })
}

export const getNowPlayingList:Function = () => (dispatch:Dispatch<TmdbPlayingNow>) => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbApiKey}&language=en-US&page=1`)
        .then(response => {
            dispatch({
                type: Constants.GET_NOW_PLAYING,
                payload: response.data.results,
                responseFound: true
            })
        })
}
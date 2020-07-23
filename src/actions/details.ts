import axios from 'axios'
import { omdbApiKey } from '../config'
import { Constants, Details, IMovieDetails} from './types';
import { Dispatch } from 'redux'

export const getDetails:Function = (id:string) => (dispatch:Dispatch<Details>) => {
    axios.get(`http://www.omdbapi.com/?apikey=${omdbApiKey}&i=${id}`)
        .then(response => {
            if(response.data.Response === 'True'){
                dispatch({
                    type: Constants.GET_DETAILS,
                    payload: response.data
                })
            }else {
                dispatch({
                    type: Constants.GET_DETAILS,
                    payload: {} as IMovieDetails
                })
            }
        })
        .catch(error => console.log(error))
};
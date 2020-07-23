import { Constants, IMovieDetails, Details } from '../actions/types'

export interface IDetailsReducer {
    movieDetails: IMovieDetails,
    loadingDetails: boolean
}

const initialstate:IDetailsReducer = {
    movieDetails: {} as IMovieDetails,
    loadingDetails: true
}

const movieDetails = (state:IDetailsReducer = initialstate, action:Details) => {
    switch(action.type) {
        case Constants.GET_DETAILS:
            return {
                movieDetails: action.payload,
                loadingDetails: false
            }
        default:
            return state;
    }
}
export default movieDetails;
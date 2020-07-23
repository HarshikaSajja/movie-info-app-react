import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import loaderReducer from './loaderReducer'
import movieDetails from './detailsReducer'

const rootReducer = combineReducers({
    movies: searchReducer,
    loader: loaderReducer,
    details: movieDetails
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
import { Constants, OmdbMovie, Trending, PlayingNow, OmdbSearch, TmdbTrending, TmdbPlayingNow } from '../actions/types'

export interface ISearchReducer {
    movies: OmdbMovie[],
    loadingResults: boolean,
    responseFound: boolean,
    trendingList: Trending[],
    nowPlaying: PlayingNow[]
}

const initialSearchState:ISearchReducer = {
    movies: [],
    loadingResults: true,
    responseFound: false,
    trendingList: [],
    nowPlaying: []
}

type Action = OmdbSearch | TmdbTrending | TmdbPlayingNow;

const moviesList = (state:ISearchReducer = initialSearchState, action:Action) => {
    switch(action.type) {
        case Constants.SEARCH:
            return {
                ...state,
                movies: action.payload,
                loadingResults: false,
                responseFound: action.responseFound
            }
            case Constants.GET_TRENDING:
                return {
                    ...state,
                    trendingList: action.payload,
                    loadingResults: false,
                    responseFound: action.responseFound
                }
            case Constants.GET_NOW_PLAYING:
                return {
                    ...state,
                    nowPlaying: action.payload,
                    loadingResults: false,
                    responseFound: action.responseFound
                }
        default:
            return state;
    }
}
export default moviesList;
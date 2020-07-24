export enum Constants {
    SEARCH = 'SEARCH',
    SET_LOADER = 'SET_LOADER',
    GET_DETAILS = 'GET_DETAILS',
    GET_TRENDING = 'GET_TRENDING',
    GET_NOW_PLAYING = 'GET_NOW_PLAYING'
}

export interface OmdbMovie {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

export interface OmdbSearch {
    type: typeof Constants.SEARCH,
    payload: OmdbMovie[],
    responseFound: boolean
}

export interface Trending {
    id: string,
    poster_path: string
}

export interface PlayingNow extends Trending{
    title: string,
    overview: string
}

export interface TmdbTrending {
    type: typeof Constants.GET_TRENDING,
    payload: Trending[],
    responseFound: boolean
}

export interface TmdbPlayingNow {
    type: typeof Constants.GET_NOW_PLAYING,
    payload: PlayingNow[],
    responseFound: boolean
}

export interface IMovieDetails {
    Genre: string,
    Released: string,
    imdbRating: string,
    Director: string,
    Writer: string,
    Actors: string,
    Title: string,
    Plot: string,
    Poster: string
}

export interface Details {
    type: typeof Constants.GET_DETAILS,
    payload: IMovieDetails
}
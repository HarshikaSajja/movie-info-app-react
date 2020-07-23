export enum Constants {
    SEARCH = 'SEARCH',
    SET_LOADER = 'SET_LOADER',
    GET_DETAILS = 'GET_DETAILS',
    GET_TRENDING = 'GET_TRENDING',
    GET_NOW_PLAYING = 'GET_NOW_PLAYING'
}

interface OmdbMovie {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

interface OmdbSearch {
    type: typeof Constants.SEARCH,
    payload: OmdbMovie[],
    responseFound: boolean
}

interface Trending {
    id: string,
    poster_path: string
}

interface PlayingNow extends Trending{
    title: string,
    overview: string
}

interface TmdbTrending {
    type: typeof Constants.GET_TRENDING,
    payload: Trending[],
    responseFound: boolean
}

interface TmdbPlayingNow {
    type: typeof Constants.GET_NOW_PLAYING,
    payload: PlayingNow[],
    responseFound: boolean
}

interface IMovieDetails {
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

interface Details {
    type: typeof Constants.GET_DETAILS,
    payload: IMovieDetails
}

export { OmdbSearch, TmdbTrending, TmdbPlayingNow, Trending, PlayingNow, OmdbMovie, IMovieDetails, Details}
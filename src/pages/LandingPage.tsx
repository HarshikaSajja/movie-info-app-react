import React from 'react'
import NavBar from '../components/NavBar'
import SearchForm from '../components/SearchForm'
import Recommendations from '../layouts/Recommendations'
import ResultsContainer from '../layouts/ResultsContainer'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { AppState } from '../reducers'
import { ILoaderReducer } from '../reducers/loaderReducer'
import { ISearchReducer } from '../reducers/searchReducer'

const LandingPage: React.FC = (): JSX.Element => {
    const {loadingResults: loading, enableLoader: loader}:{loadingResults:ISearchReducer,enableLoader:ILoaderReducer} = useSelector((state:AppState) => {
        return {
            loadingResults: state.movies.loadingResults,
            enableLoader: state.loader.enableLoader
        }
    });

    return (
        <main>
            <NavBar/>
            <SearchForm/>
            {loader ? (loading ? <p>Loading.....</p> : <ResultsContainer/>) : <Recommendations/> }
            <Footer/>
        </main>
    )
}

export default LandingPage;
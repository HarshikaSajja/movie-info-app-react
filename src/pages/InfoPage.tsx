import React from 'react'
import NavBar from '../components/NavBar'
import DetailsCard from '../components/DetailsCard'
import RelatedResults from '../components/RelatedResults'

const MovieDetails: React.FC = (): JSX.Element => {
    return (
        <main style={{height:'100vh',width:'100vw'}}>
            <NavBar/>
            <DetailsCard/>
            <RelatedResults/>
        </main>
    )
}

export default MovieDetails
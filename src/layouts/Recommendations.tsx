import React from 'react'
import TopRated from '../components/TopRated'
import PlayingNow from '../components/PlayingNow'

const TrendingSection: React.FC = (): JSX.Element => {
    return (
        <section className="d-flex flex-row justify-content-around flex-wrap">
          <div className="row w-100" style={{margin:'1rem'}}>
                <TopRated/>
                <PlayingNow/>
          </div>
         </section>
    )
}

export default TrendingSection

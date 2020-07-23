import React from 'react'

const NavBar:React.FC = ():JSX.Element => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="navbar-brand">
                <span className="fa fa-file-video"></span>
                <span>MovieInfo</span>
            </div>
        </nav>
    )
}

export default NavBar
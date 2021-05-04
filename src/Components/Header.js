import React, { useState, useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";

import GithubLogo from '../Images/Github-logo.png'
import SearchIcon from '../Images/search-icon.png'
import GridIcon from '../Images/grid-icon.png'
import ListIcon from '../Images/list-icon.png'
import PersonIcon from '../Images/person-logo.png'

const Header = ({ view, setView }) => {
    const [searchInput, setSearchInput] = useState('')

    let history = useHistory()
    const handleSubmit = (e) => {
        if (searchInput) window.location.href = `/${searchInput}`

        e.preventDefault()
        setSearchInput('')
    }

    const viewActiveStyle = {
        filter: 'invert(36%) sepia(74%) saturate(4958%) hue-rotate(201deg) brightness(97%) contrast(90%)'
    }

    const viewChange = () => {
        view === 0 ? setView(1) : setView(0)
    }

    return (
        <header className="header">
            {/* Logo */}
            <Link to={`/`}>
                <img className="logo" src={GithubLogo} alt="GitHub Logo" />
            </Link>


            {/* Search Bar */}
            <div className="search-bar">
                <form onSubmit={handleSubmit}>

                    <input
                        className="input-type-text"
                        type="text"
                        placeholder="Search user..."
                        value={searchInput}
                        onChange={e => setSearchInput(e.target.value)}
                    />


                    {/* incomplete */}
                        {/* <div className="latest-searches">
                            <p className="title">Latest Searches:</p>


                            <a className="searched-person" href={`/`}>
                                <img
                                    src={PersonIcon}
                                    className="person-logo"
                                    alt="personlogo"
                                />
                                <p></p>
                            </a>


                            <a className="searched-person" href={`/`}>
                                <img
                                    src={PersonIcon}
                                    className="person-logo"
                                    alt="personlogo"
                                />
                                <p></p>
                            </a>
                            

                            <a className="searched-person" href={`/`}>
                                <img
                                    src={PersonIcon}
                                    className="person-logo"
                                    alt="personlogo"
                                />
                                <p></p>
                            </a>


                        </div> */}
                    {/* incomplete */}


                    <img
                        src={SearchIcon}
                        alt="Search Icon"
                        className="search-icon"
                        onClick={handleSubmit}
                    />

                </form>

            </div>


            {/* View */}
            <div className="view">
                {
                    view === 0 ?
                        <>
                            <img onClick={viewChange} className="grid" src={GridIcon} alt="gridicon" />
                            <img style={viewActiveStyle} className="list" src={ListIcon} alt="listicon" />
                        </> :
                        <>
                            <img style={viewActiveStyle} className="grid" src={GridIcon} alt="gridicon" />
                            <img onClick={viewChange} className="list" src={ListIcon} alt="listicon" />
                        </>
                }
            </div>


        </header>
    )
}

export default Header

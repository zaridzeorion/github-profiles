import React, { useState, useEffect } from 'react'
import getRepos from '../Functions/getRepos'
import Loading from './Loading'
import RepoIcon from '../Images/repository-icon.png'

const MainPageRepos = ({ user, className }) => {
    const [loading, setLoading] = useState(true)
    const [repos, setRepos] = useState(null)

    useEffect(() => {
        getRepos(user)
            .then(response => {
                if (response === undefined) {

                }

                setLoading(false)
                setRepos(response)

            })
    }, [user])



    return (
        <>

            <ul>
                <img className="repo-icon" src={RepoIcon} alt="RepoIcon" />
                {
                    repos ? repos.map(repo => {
                        return <li className={className} key={repo.id}>
                            {repo.name};
                                    </li>
                    }).slice(0, 3)
                        : <Loading type="repoLoading" />
                }
            </ul>
        </>
    )
}

export default MainPageRepos

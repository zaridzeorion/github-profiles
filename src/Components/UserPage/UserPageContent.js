import React, {useEffect} from 'react'
import UserOrganizations from './UserOrganizations'
import UserRepos from '../UserRepos'
import { useLocation } from 'react-router-dom'

const UserPageContent = ({ userData }) => {
    const { name, login, type, avatar_url } = userData



    
    let location = useLocation();
    useEffect(() => {
      console.log(location.pathname)
    }, [])

    return (
        <div className="user-page">

            <img className="avatar" src={avatar_url} alt={name} title={name} />

            <div className="texts-container">
                {name &&
                    <span>
                        <h2 className="name">{name} <span className="type user-type">{type}</span></h2>
                    </span>
                }

                <a target="_blank" rel="noreferrer" href={`https://github.com/${login}`}><h3 className="login">@{login}</h3></a>

                <div className="repos">
                    <UserRepos user={login} className="user-repo" />
                </div>

                <UserOrganizations user={login} />

            </div>



        </div>
    )
}

export default UserPageContent

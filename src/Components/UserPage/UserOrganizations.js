import React, { useEffect, useState } from 'react'
import getOrgs from '../../Functions/getUserOrganizations'

const UserOrganizations = ({ user }) => {
    const [orgs, setOrgs] = useState('') // Organizations that user belongs

    useEffect(() => {
        getOrgs(user)
            .then(response => setOrgs(response))
    }, [user])

    return (
        <>
            <span className="important-text title">User Organizations</span>
            <ul className="orgs">
                {orgs.length ? orgs.map(org => (

                    <li className="org" key={org.id}>
                        <a className="orgs-login" href={`https://github.com/${org.login}`}>
                            <img className="orgs-image" src={org.avatar_url} alt={org.login} />
                            <h6>{org.login}</h6>
                        </a>
                    </li>

                )) : <li className="org">No Organizations</li>}
            </ul>
        </>
    )
}

export default UserOrganizations
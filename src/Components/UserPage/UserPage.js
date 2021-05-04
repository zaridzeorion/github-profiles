import React, { useState, useEffect } from 'react'

// Components
import Loading from '../Loading'
import Error from '../Error'
import UserPageContent from './UserPageContent.js'

// Function(s)
import getUser from '../../Functions/getUser'

const UserPage = ({ match }) => {
    const [user, setUser] = useState(null)
    const [userData, setUserData] = useState([{}])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setUser(match.params.username)
    }, [user])

    useEffect(() => {
        
        getUser(user)
            .then(response => {
                setUserData(response)
                document.title = `${response.login} ${response.name ? `(${response.name})` : ``}`
                setLoading(false)
            })

            .catch(error => {
                console.error(error)
                setLoading(false)
            })

    }, [user])


    return (
        <React.Fragment>

            { userData ?
                loading
                    ? <Loading />
                    : <UserPageContent userData={userData} />
                : <Error />
            }

        </React.Fragment>
    )
}

export default UserPage

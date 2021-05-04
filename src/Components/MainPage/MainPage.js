import React, { useEffect, useState } from 'react'
import getTopUsers from '../../Functions/getTopUsers'
import Loading from '../Loading'
import UserRepos from '../UserRepos'
import RepoIcon from '../../Images/repository-icon.png'
import PersonLogo from '../../Images/person-logo.png'
import RateLimit from '../../Components/RateLimit';
import { Link, useLocation } from "react-router-dom";

const Main = ({ view }) => {
  const [loading, setLoading] = useState(true)
  const [topUsers, setTopUsers] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    getTopUsers(page).then(response => {
      setTopUsers(response && response.items)
      setLoading(false)
    })
  }, [page])

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  const nextPage = () => {
    setPage(page + 1)
    scrollToTop()
  }
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1)
      scrollToTop()
    }
  }



  return (
    <main className={view === 0 ? 'main-list' : 'main-grid'}>

      <ul className={view === 0 ? 'users' : 'users-grid'}>
        {!loading && topUsers ? topUsers.map(user => (
          <li key={user.id} className={view === 0 ? 'user' : 'user-grid'}>

            <img className={view === 0 ? 'user-avatar' : 'user-avatar-grid'} alt="UserAvatar" src={user.avatar_url} />


            <div className="person">
              <img className={view === 0 ? 'person-logo' : 'person-logo person-logo-grid'} src={PersonLogo} alt="PersonLogo" />
              <Link to={`/${user.login}`}><h2 className={view === 0 ? 'user-login' : 'user-login-grid'}> {user.login} </h2></Link>
            </div>


            <h4 className={view === 0 ? 'user-type' : 'user-type user-type-grid'}> {user.type} </h4>


            <div className="repos">
              <UserRepos user={user.login} className="user-repos" />
            </div>

          </li>
        )) : <Loading />}
      </ul>


      {!loading &&
        <div className="page-switch">
          <p style={page === 1 ? { background: '#2b3137' } : {}} className="prev-page" onClick={() => prevPage()}>{`<`}</p>
          <p className="next-page" onClick={() => nextPage()}>{`>`}</p>
        </div>
      }

    </main>
  );
}

export default Main;

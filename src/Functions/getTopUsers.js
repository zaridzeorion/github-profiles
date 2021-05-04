import axios from 'axios';

export default function getTopUsers(page) {
  const per_page = 9
  const URL = `https://api.github.com/search/users?q=type:user&per_page=${per_page}&page=${page}`
  return axios.get(URL)
  
      .then(response => {
          return response.data;
      })

      .catch(error => {
          console.error(error);
      });
}
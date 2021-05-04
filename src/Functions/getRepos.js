import axios from 'axios'

export default function getRepos(user) {
    const URL = `https://api.github.com/users/${user}/repos`
    return axios.get(URL)

        .then(response => {
            return response.data;
        })

        .catch(error => {
            // console.log(error.response)
        });
}
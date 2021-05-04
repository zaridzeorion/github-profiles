import axios from 'axios'

export default function getUser(user) {
    const URL = `https://api.github.com/users/${user}`
    return axios.get(URL)
    
        .then(response => {
            return response.data;
        })

        .catch(error => {
            // console.error(error);
        });
}
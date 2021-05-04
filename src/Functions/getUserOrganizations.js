import axios from 'axios'

export default function getUserOrganizations(user) {
    const URL = `https://api.github.com/users/${user}/orgs`
    return axios.get(URL)

        .then(response => {
            return response.data;
        })

        .catch(error => {
            console.log(error.response)
        });
}
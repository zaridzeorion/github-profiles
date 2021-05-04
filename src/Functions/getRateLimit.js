import axios from 'axios'

export default function getRateLimit() {
    const URL = `https://api.github.com/rate_limit`

    return axios.get(URL)
        .then(response => {
            console.log(response.data.rate)
            return response.data.rate;
        })

        .catch(error => {
            console.error(error.response);
        });
}
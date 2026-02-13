import axios from 'axios'
const url = `https://studies.cs.helsinki.fi/restcountries/api/name`

const getCountries = (name) =>{
    const url1 = `${url}/${name}`
    return axios.get(url1).then(response =>{
        return response.data
    })
}
export default {getCountries}
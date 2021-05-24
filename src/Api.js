import axios from 'axios';

const URI = "https://api.covid19api.com/"
let extendedURL = 'summary'
let isGlobal = true
let values = []

const fetchGlobalData = async () => {
    const { data } = await axios.get(`${URI}${extendedURL}`)

    return data
}

const fetchCountryData = async () => {
    return
}

const toggleGlobal = async () => {
    isGlobal = !isGlobal 
}


export {
    fetchGlobalData,
    fetchCountryData,
    toggleGlobal,
    isGlobal
}
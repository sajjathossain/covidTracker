import axios from 'axios';

const URI = "https://api.covid19api.com"

const fetchGlobalData = async () => {
    const { data } = await axios.get(`${URI}/summary`)

    return data
}

const fetchCountryData = async (countryName) => {
    const { data } = await axios.get(`${URI}/country/${countryName}`)

    return data
}

const fetchAllCountryNames = async () => {
    const { data } = await axios.get(`${URI}/countries`)

    let countries = data.sort((a, b) => (a.Country.toLowerCase() > b.Country.toLowerCase() ? 1 : -1));

    return countries
}

export {
    fetchGlobalData,
    fetchCountryData,
    fetchAllCountryNames
}
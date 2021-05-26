import axios from 'axios';
const URI = "https://api.covid19api.com"

const fetchGlobalData = async () => {
    const { data } = await axios.get(`${URI}/summary`)
    // let topCountries = data.Countries.sort((a, b) => (a.totalConfirmed - b.totalConfirmed) ? 1 : -1);
    // let currentLeast = null
    // let topCountries = []
    // data.Countries.forEach(country => {
        // currentLeast =  currentLeast !== null || country.topConfirmed < currentLeast.topConfirmed  ? country : null
    // })

    

    // console.log(topCountries, currentLeast);

    return data
}

const fetchCountryData = async (countryName) => {
    const { data } = await axios.get(`${URI}/country/${countryName}`)

    return data
}

const fetchAllCountryNames = async () => {
    const { data } = await axios.get(`${URI}/countries`)

    let countries = await data.sort((a, b) => (a.Country.toLowerCase() > b.Country.toLowerCase() ? 1 : -1));

    return countries
}

export {
    fetchGlobalData,
    fetchCountryData,
    fetchAllCountryNames
}
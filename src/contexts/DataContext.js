import React, { useState, useEffect,createContext } from 'react'
import { fetchGlobalData, fetchCountryData, fetchAllCountryNames } from '../Api/Api';

const DataContext = createContext()

const DataProvider = (props) => {
    const [globalData, setGlobalData] = useState([])
    const [countryData, setCountryData] = useState([])
    const [isGlobal, setIsGlobal] = useState(false)
    const [countryName, setCountryName] = useState('India')
    const [allCountryName, setAllCountryName] = useState([])
    const [topRecoveredCountries, setTopRecoveredCountries] = useState([])
    const [topConfirmedCountries, setTopConfirmedCountries] = useState([])
    const [topCountriesByDeath, setTopCountriesByDeath] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const value = {
        values: !isGlobal ? globalData.Global : countryData[countryData.length - 1],
        countryDatas: countryData,
        countryValues: { countryName, setCountryName },
        allCountryName,
        gOrC: { isGlobal, setIsGlobal },
        isLoading
    }

    const setCountryValues = () => {
        if(!isGlobal && !globalData){
            const result = globalData.Countries.filter(obj => {
                return obj.Country === countryName
            })
    
            console.log(countryData, isGlobal, globalData);
            setCountryData(result)
            // setCountryData(await fetchCountryData(countryName))
        }
    }

    useEffect(() => {        
        const collectData = async () => {
            setGlobalData(await fetchGlobalData())
            setAllCountryName(await fetchAllCountryNames())
            if(!globalData) {
                setIsLoading(false)
                setCountryValues()
            }
        }
        
        collectData()
    }, [isGlobal])


    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}

export {
    DataContext,
    DataProvider
}
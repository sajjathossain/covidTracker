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
        values: countryData[countryData.length - 1] || globalData.Global,
        countryDatas: countryData,
        countryValues: { countryName, setCountryName },
        allCountryName,
        gOrC: { isGlobal, setIsGlobal },
        isLoading
    }

    useEffect(() => {        
        const collectData = async () => {
            setGlobalData(await fetchGlobalData())
            console.log(globalData)
            console.log(countryData)
            if(!isGlobal && !globalData){
                const result = await globalData.Countries.filter(obj => {
                    return obj.Country === countryName
                })

                setCountryData(result)
                // setCountryData(await fetchCountryData(countryName))
            }
            
            setAllCountryName(await fetchAllCountryNames())
            setIsLoading(false)
        }
        
        collectData()
    }, [isGlobal, countryData])

    
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
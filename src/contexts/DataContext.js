import React, { useState, useEffect,createContext } from 'react'
import { fetchGlobalData, fetchCountryData, fetchAllCountryNames } from '../Api/Api';

const DataContext = createContext()

const DataProvider = (props) => {
    const [globalData, setGlobalData] = useState([])
    const [countryData, setCountryData] = useState([])
    const [isGlobal, setIsGlobal] = useState(false)
    const [countryName, setCountryName] = useState(null)
    const [allCountryName, setAllCountryName] = useState([])
    const [topConfirmedCountries, setTopConfirmedCountries] = useState([])
    const [topRecoveredCountries, setTopRecoveredCountries] = useState([])
    const [topCountriesByDeath, setTopCountriesByDeath] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const value = {
        values: globalData.Global,
        countryDatas: countryData,
        countryValues: { countryName, setCountryName },
        allCountryName,
        gOrC: { isGlobal, setIsGlobal },
        loading: { isLoading, setIsLoading }
    }

    
    useEffect(() => {        
        const collectData = async () => {
            setGlobalData(await fetchGlobalData())
            
            if(countryName !== null) {
                const result = await setCountryValues()
                setCountryData(await result)
            }

            await getAllCountryName()
            // await getTopCountriesByInfected()
            setIsLoading(false)
        }
        
        collectData()
    }, [countryName, isLoading, isGlobal])
    
    const getAllCountryName = async () => {
        try {
            const countries = await globalData.Countries
            let result = []
            for(let country in countries){
                result.push(countries[country].Country)
            }
            
            setAllCountryName(result)
            // return result
        } catch(err) {
            console.log(err)
        }
    }

    const setCountryValues = () => {
        try{
            const result = globalData.Countries.filter(obj => {
                return obj.Country === countryName
            })
            return result
        } catch(err) {
            console.log(err)
        }

    }

    // const getTopCountriesByInfected = async () => {
    //     console.log(countries);
    // }

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
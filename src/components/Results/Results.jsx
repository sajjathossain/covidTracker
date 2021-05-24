import { useEffect, useState, useContext } from 'react';
import { DataContext } from '../../contexts/DataContext'
import Result from './Result/Result'
import LoadingAnimation from '../LoadingAnimaton/LoadingAnimation'
import styles from './Results.module.css'

const Results = () => {
    
    const [totalRecovered, setTotalRecovered] = useState(null)
    const [totalDeaths, setTotalDeaths] = useState(null)
    const [totalConfirmed, setTotalConfirmed] = useState(null)
    
    const {globalValues, countryValues, isGlobal, isLoading} = useContext(DataContext)
    const {countryData, setCountryData } = countryValues
    const countryName =  isGlobal ? "Global" : ""
    useEffect(() => {
        const getData = async () => {
            if(!isLoading) {
                const { TotalRecovered, TotalDeaths, TotalConfirmed } = globalValues
                setTotalRecovered(await TotalRecovered)
                setTotalDeaths(await TotalDeaths)
                setTotalConfirmed(await TotalConfirmed)
            }
        }
        
        getData()
        
    }, [isLoading, globalValues, countryData])
    
    return (
        <>
        {
            isLoading ? <LoadingAnimation /> : 
            <section className={`${styles.resultsContainer}`}>
                <Result country={countryName} resultText="Recovered" borderColor="lightseagreen" resultValue={totalRecovered} />
                <Result country={countryName} resultText="Infected" borderColor="lightskyblue" resultValue={totalConfirmed} />
                <Result country={countryName} resultText="Deaths" borderColor="lightcoral" resultValue={totalDeaths} />
            </section>
        }
        </>
    )
}

export default Results

import { useEffect, useState, useContext } from 'react';
import { DataContext } from '../../contexts/DataContext'
import Result from './Result/Result'
import LoadingAnimation from '../LoadingAnimaton/LoadingAnimation'
import styles from './Results.module.css'

const Results = () => {
    
    const [newConfirmed, setNewConfirmed] = useState(null)
    const [newRecovered, setNewRecovered] = useState(null)
    const [newDeaths, setNewDeaths] = useState(null)
    const [totalRecovered, setTotalRecovered] = useState(null)
    const [totalDeaths, setTotalDeaths] = useState(null)
    const [totalConfirmed, setTotalConfirmed] = useState(null)
    
    const {values, countryDatas, countryValues, gOrC, loading} = useContext(DataContext)
    const countryName =  gOrC.isGlobal ? "Global" : countryValues.countryName
    
    useEffect(() => {
        const getData = async () => {
            try {
                const { NewConfirmed, NewRecovered, NewDeaths, TotalRecovered, TotalDeaths, TotalConfirmed } = gOrC.isGlobal === false ? await Object.values(countryDatas)[0] : await values
                setNewConfirmed(await NewConfirmed)
                setNewRecovered(await NewRecovered)
                setNewDeaths(await NewDeaths)
                setTotalConfirmed(await TotalConfirmed)
                setTotalRecovered(await TotalRecovered)
                setTotalDeaths(await TotalDeaths)
            } catch (e) {
                console.log(e)
            }
        }
        
        getData()
        
    }, [loading.isLoading, countryName, countryDatas, gOrC.isGlobal])
    
    return (
        <>
        {
            loading.isLoading ? <LoadingAnimation /> : 
            <section className={`${styles.resultsContainer}`}>
                <Result country={countryName} resultText="New Confirmed" borderColor="lightskyblue" resultValue={newConfirmed} />
                <Result country={countryName} resultText="New Recovered" borderColor="lightseagreen" resultValue={newRecovered} />
                <Result country={countryName} resultText="New Deaths" borderColor="lightcoral" resultValue={newDeaths} />
                <Result country={countryName} resultText="Total Confirmed" borderColor="lightskyblue" resultValue={totalConfirmed} />
                <Result country={countryName} resultText="Total Recovered" borderColor="lightseagreen" resultValue={totalRecovered} />
                <Result country={countryName} resultText="Total Deaths" borderColor="lightcoral" resultValue={totalDeaths} />
            </section>
        }
        </>
    )
}

export default Results

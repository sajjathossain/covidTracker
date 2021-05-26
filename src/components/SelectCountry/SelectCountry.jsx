import { useEffect, useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'
import LoadingAnimation from '../LoadingAnimaton/LoadingAnimation'
import styles from './SelectCountry.module.css';

const SelectCountry = () => {
  const { countryValues, allCountryName, gOrC, loading } = useContext(DataContext)
  const {countryName, setCountryName} = countryValues

  const handleChange = async (e) => {
    loading.setIsLoading(true)
    const value = await e.target.value
    await gOrC.setIsGlobal(value === "global" ? true : false)
    await setCountryName(value === "global" ? null : value)
    loading.setIsLoading(false)
  }

  useEffect(() => {
    const init = async () => {
      gOrC.setIsGlobal(true)
      setCountryName(null)
    }

    init()
  }, [])

  return (
    loading.isLoading ? <LoadingAnimation /> :
    <div className={`${styles.selectorContainer} applyBoxShadow`}>
      <select className={styles.select} value={!countryName ? "global" : countryName} onChange={handleChange}>
        <option value="global">Global</option>
        {
          allCountryName.map((country) => {
              return <option value={country} key={allCountryName.indexOf(country)}>{country}</option>
          })
        }
      </select>
    </div>
  )
}



export default SelectCountry
import { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'
import styles from './SelectCountry.module.css';

const SelectCountry = () => {
  const { countryValues, allCountryName, gOrC } = useContext(DataContext)
  const {countryName, setCountryName} = countryValues

  const handleChange = (e) => {
    setCountryName(e.target.value)
  }

  return (
    <div className={styles.selectorContainer}>
      <select className={styles.select} value={!countryName ? "global" : countryName} onChange={handleChange}>
        <option value="global" disabled>Choose an option!</option>
        <option value="global">Global</option>
        {
          allCountryName.map((country) => {
            return (
                <option value={country.Country} key={allCountryName.indexOf(country)}>{country.Country}</option>
              )
          })
        }
      </select>
    </div>
  )
}



export default SelectCountry
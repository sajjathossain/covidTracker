import { Card } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import TabComponent from './TabComponent/TabComponent'
import styles from './TopCountry.module.css'

const TopCountry = () => {
  return (
    <div className={styles.countryContainer}>
      {/* <h1>Top Countries</h1> */}
      <TabComponent />
    </div>
  )
}



export default TopCountry
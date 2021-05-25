import TabComponent from './TabComponent/TabComponent'
import styles from './TopCountry.module.css'

const TopCountry = () => {
  return (
    <div className={`${styles.countryContainer} applyBoxShadow`}>
      <TabComponent />
    </div>
  )
}



export default TopCountry
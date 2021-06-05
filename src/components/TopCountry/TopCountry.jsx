import TabComponent from './TabComponent/TabComponent'
import styles from './TopCountry.module.css'

const TopCountry = () => {
  return (
    <div className={`${styles.countryContainer} applyBoxShadow`}>
      {/* <h1 className={styles.header}>Top Countries</h1> */}
      <TabComponent className={styles.tabComponent}/>
    </div>
  )
}



export default TopCountry
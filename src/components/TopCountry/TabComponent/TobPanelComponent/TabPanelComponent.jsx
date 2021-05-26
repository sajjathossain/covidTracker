import styles from './TabPanelComponent.module.css'

const TabPanelComponent = ({ countries }) => {
  return (
    <div className={styles.tabPanelComponent}>
      {
        <p className={styles.countryName}>{countries}</p>
      }
    </div>
  )
}



export default TabPanelComponent
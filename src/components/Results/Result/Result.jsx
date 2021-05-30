import styles from './Result.module.css'

const Result = ({ country, resultText, borderColor, resultValue }) => {
   
    return (
        <div className={`${styles.card} applyBoxShadow`} style={{borderLeft: `5px solid ${borderColor}`, borderRadius: "5px"}}>
            <div className={styles.cardTitle}>
                {`${resultText} `}
            </div>
            <div className={styles.cardBody}>
                { resultValue }
            </div>
        </div>
    )
}

export default Result

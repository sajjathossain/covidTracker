import styles from './Result.module.css'

const Result = ({ country, resultText, borderColor, resultValue }) => {
    return (
        <div className={styles.card} style={{borderLeft: `5px solid ${borderColor}`, borderRadius: "5px"}}>
            <div className={styles.cardTitle}>
                {` ${country} ${resultText} `}
            </div>
            <div className={styles.cardBody}>
                { resultValue }
            </div>
        </div>
    )
}

export default Result

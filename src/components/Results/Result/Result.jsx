import { Card } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import styles from './Result.module.css'

const Result = ({ country, resultText, borderColor, resultValue }) => {
    return (
        <Card className={styles.card} style={{borderLeft: `5px solid ${borderColor}`, borderRadius: "5px"}}>
            <div className={styles.cardTitle}>
                {` ${country} ${resultText} `}
            </div>
            <div className={styles.cardBody}>
                { resultValue }
            </div>
        </Card>
    )
}

export default Result

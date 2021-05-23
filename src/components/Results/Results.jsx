import Result from './Result/Result'
import styles from './Results.module.css'

const Results = () => {
    return (
        <section className={`${styles.resultsContainer}`}>
            <Result country="Global" resultText="Recovered" borderColor="lightseagreen" resultValue="1000" />
            <Result country="Global" resultText="Infected" borderColor="lightblue" resultValue="10000" />
            <Result country="Global" resultText="Deaths" borderColor="lightcoral" resultValue="100" />
        </section>
    )
}

export default Results

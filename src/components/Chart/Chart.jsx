import * as ChartComponent from 'react-chartjs-2';

import { useContext, useEffect, useState } from 'react'

import { DataContext } from '../../contexts/DataContext'
import styles from './Chart.module.css'

const Chart = () => {
  const [newConfirmed, setNewConfirmed] = useState(null)
  const [newRecovered, setNewRecovered] = useState(null)
  const [newDeaths, setNewDeaths] = useState(null)
  const [totalRecovered, setTotalRecovered] = useState(null)
  const [totalDeaths, setTotalDeaths] = useState(null)
  const [totalConfirmed, setTotalConfirmed] = useState(null)
    
  const {values, countryDatas, gOrC, loading, countryValues} = useContext(DataContext)

  const data = {
    labels: ['New Confirmed', 'Total Confirmed', 'New Recovered', 'Total Recovered', 'New Deaths', 'Total Deaths'],
        datasets:[
          {
            label:`${countryValues.countryName === null ? "Global" : countryValues.countryName} data`,
            data:[
              newConfirmed,
              totalConfirmed,
              newRecovered,
              totalRecovered,
              newDeaths,
              totalDeaths
            ],
            backgroundColor:[
              'lightseagreen',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'lightcoral',
              'lightcoral'
            ]
          }
        ]
  }

  const options = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    // maintainAspectration: true,
    plugins: {
      legend: {
        fontSize: 24,
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Covid19 Data Visualization',
        fontSize: 25,
        position: 'top'
      },
    },
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const { NewConfirmed, NewRecovered, NewDeaths, TotalRecovered, TotalDeaths, TotalConfirmed } = gOrC.isGlobal === false ? await Object.values(countryDatas)[0] : await values
        setNewConfirmed(await NewConfirmed)
        setNewRecovered(await NewRecovered)
        setNewDeaths(await NewDeaths)
        setTotalConfirmed(await TotalConfirmed)
        setTotalRecovered(await TotalRecovered)
        setTotalDeaths(await TotalDeaths)
      } catch (e) {
        console.log(e)
      }
    }

    getData()
  },  [loading.isLoading, values, gOrC.isGlobal, countryDatas])

  return (
    <div className={`${styles.chartContainer} applyBoxShadow`}>
      <ChartComponent.Bar data={data} options={options} height={"auto"} />
    </div>
  )
}



export default Chart
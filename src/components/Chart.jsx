import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect,useState } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import "./Chart.css"
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart(props) {
  const [timeframe, settimeframe] = useState("d1")
  const [data, setdata] = useState({ 
    labels: [], 
    datasets: [{ 
      label: 'Price (USD)', 
      data: [], 
      borderColor: 'rgb(255, 99, 132)', 
      backgroundColor: 'rgba(255, 99, 132, 0.5)', 
    }] 
  });
  const [options, setoptions] = useState({
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '',
      },
    },
  })

  useEffect(() => {

    const fetch_history=async()=>{
      const history_data=await fetch(`https://api.coincap.io/v2/assets/${props.coin}/history?interval=${timeframe}`);
      const history_val=await history_data.json();
      const chart_data={
        labels:history_val.data.map((prices)=>{
          return moment.unix(prices.time/1000).format('MM-DD')
        }),
        datasets: [
          {
            label: timeframe,
            data:history_val.data.map((prices)=>{
              return prices.priceUsd
            }),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      }
      setdata(chart_data);
    }

    fetch_history();
  }, [props.coin,timeframe])

  return <div>
    <div className="chart-button">
    <button className="timeframe" onClick={()=>settimeframe("h6")}>6H</button>
    <button className="timeframe" onClick={()=>settimeframe("h12")}>12H</button>
    <button className="timeframe" onClick={()=>settimeframe("d1")}>1D</button>
    <button className="timeframe" onClick={()=>settimeframe("m1")} >1M</button>
    </div>
    {data?<Line options={options} data={data}/>:""}
    </div>
}

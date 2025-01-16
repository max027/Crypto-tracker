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

  const [data, setdata] = useState({datasets:[]});
  const [options, setoptions] = useState({
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  })

  useEffect(() => {
 
    const fetch_history=async()=>{
      const history_data=await fetch(`https://api.coincap.io/v2/assets/${props.coin}/history?interval=d1`);
      const history_val=await history_data.json();
      setdata({
        labels:history_val.data.map((prices)=>{
          return moment.unix(prices.time/1000).format('MM-DD')
        }),
        datasets: [
          {
            label: 'Dataset 1',
            data:history_val.data.map((prices)=>{
              return prices.priceUsd
            }),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      })
    }

    fetch_history();
  }, [])
  
  console.log(data);
  return <div>
   <Line options={options} data={data} />
    </div>
}

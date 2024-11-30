import "./Home.css";
import { useEffect ,useState} from "react";

export default function Home() {
 const [coins, setcoins] = useState([]);  
  async function fetch_coin() {
    try {
      const val=await fetch('https://api.coinlore.net/api/tickers/?limit=10'); 
      const data=await val.json(); 
      setcoins(data.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
   fetch_coin(); 
  }, [])
  

  return <div className="home-conainer">
    <div className="Home-main">
    <li className="list-item">
    <p>name</p> 
    <p>price(usd)</p>
    <p>percentage change(24h)</p>
    <p>market cap(usd)</p>
    </li>
    
    {
      coins.map((val)=>{
        return (
    <li key={val.id} className="list-item">
    <p>{val.name}</p> 
    <p>{val.price_usd}</p>
    <p>{val.percent_change_24h}</p>
    <p>{val.market_cap_usd}</p>
    </li>
    )
      })
    }
    </div>
    </div>
}

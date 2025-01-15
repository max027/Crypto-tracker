import { useNavigate } from "react-router";
import "./Home.css";
import { useEffect ,useState} from "react";

export default function Home() {
 const [coins, setcoins] = useState([]);  
  const navigate=useNavigate();
  async function fetch_coin() {
    try {
      const val=await fetch('https://api.coinlore.net/api/tickers/?limit=20'); 
      const data=await val.json(); 
      setcoins(data.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
   fetch_coin(); 
  }, [])
  
  return <div className="home-container">
    <div className="Home-main">
    <p>Name</p> 
    <p>Price(usd)</p>
    <p className="per_change">Percentage change(24h)</p>
    <p className="market_cap">Market cap(usd)</p>
    </div>
    {
      coins.map((i)=>{
        return <div className="Home-main items" key={i.id}>
          <p>{i.symbol}</p>
          <p>{i.price_usd}</p>
          <p className="per_change" style={i.percent_change_24h<0?{color:"red"}:{color:"green"}}>{i.percent_change_24h}</p>
          <p className="market_cap">{i.market_cap_usd}</p>
          <button  onClick={()=>navigate('/coin',{state:{symbol:i.id}})} className="Home-btn">view</button>
          </div>
      })
      
    }
    </div>
}

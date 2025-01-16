import { useLocation } from "react-router"
import { useEffect, useState} from "react";
import "./Coin.css"
import Chart from "./Chart";

export default function Coin() {
  const {state}=useLocation();
  const [coin_data, setcoin_data] = useState({});
  const [market, setmarket] = useState({});

  useEffect(() => {
    const fetch_market=async()=>{
    const market_data=await fetch(`https://api.coinlore.net/api/coin/markets/?id=${state.symbol}`)    
    const market_val=await market_data.json();
      let i=0; 
      for(let data of market_val){
        i++;
        if(i===5){
          break;
        }else{
          market[data.name]=data.price_usd;
        }
      }
    }
    fetch_market();
   const fetch_coin=async()=> {
      try{

        const val=await fetch(`https://api.coinlore.net/api/ticker/?id=${state.symbol}`);
        const coin=await val.json();
        setcoin_data(coin[0]);

      }catch(error){
        console.log(error)
      }
   } 
    fetch_coin();

  }, [])

  return <div>
    <div className="Coin-container">
    <div className="coin-info">
    <h1 className="coin-header">{coin_data.name} ({coin_data.symbol})</h1> 
    <button className="watchlist">watchlist</button>
    </div>
    <div className="Coin-chart">
    <Chart coin={coin_data.nameid} />
    </div>
    <div className="coin-info-wrapper">
    <div className="coin-first coin-info-card">
    <h2 className="coin-header">overall</h2>
    <div className="inner-grid">
    <div>
    <p>Market cap</p> 
    <p>{coin_data.market_cap_usd}</p>
    </div>

    <div>
    <p>Volume</p>
    <p>{coin_data.volume24}</p>
    </div>

    <div>
    <p>Circulating</p>
    <p>{coin_data.csupply}</p>
    </div>

    <div>
    <p>Rank</p>
    <p>#{coin_data.rank}</p>
    </div>

    </div>
    </div>

    <div className="coin-first coin-info-card">
    <h2 className="coin-header">Price change</h2>
    <div className="inner-grid">

    <div>
    <p>current price</p>
    <p>{coin_data.price_usd}</p>
    </div>

    <div>
    <p>1 hour</p>
    <p>{coin_data.percent_change_1h}</p>
    </div>

    <div>
    <p>24 hour</p>
    <p>{coin_data.percent_change_24h}</p>
    </div>

    <div>
    <p>7 days</p>
    <p>{coin_data.percent_change_7d}</p>
    </div>
    </div>
    </div>

    <div className="coin-first coin-info-card">
    <h2 className="coin-header">Exchange rates</h2>

    <div className="inner-grid">
    {
      Object.entries(market).map((val)=>{
        return <div key={val[0]}>
          <p>{val[0]}</p>
          <p>{val[1]}</p>
          </div>
      })
    }
    </div>

    </div>



    </div>

    </div>
    </div> 
}

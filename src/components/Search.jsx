import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./Home.css"
export default function Search() {
  const {state}=useLocation();
  const [coin, setcoin] = useState({}) 
 useEffect(() => {
    const fetch_coin=async()=> {
      try{
        const val=await fetch(`https://api.coincap.io/v2/assets/${state.coin}`);
        const coin=await val.json();
        setcoin(coin.data);
      }catch(error){
        console.log(error)
      }
    } 
fetch_coin();
 }, [state])
  return <div className="home-container">
    <div className="Home-main">
    <p>Name</p> 
    <p>Price(usd)</p>
    <p className="per_change">Percentage change(24h)</p>
    <p className="market_cap">Market cap(usd)</p>
    </div>
       <div className="Home-main items" >
          <p>{coin.id}</p>
          <p>{coin.priceUsd}</p>
          <p className="per_change" style={coin.changePercent24Hr<0?{color:"red"}:{color:"green"}}>{coin.changePercent24Hr}</p>
          <p className="market_cap">{coin.marketCapUsd}</p>
          <button  onClick={()=>navigate('/coin',{state:{symbol:coin.id}})} className="Home-btn">view</button>
          </div>
    </div>
}

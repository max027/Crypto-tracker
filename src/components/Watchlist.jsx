import {query, collection, getDocs } from "firebase/firestore"; 
import { useEffect,useState } from "react";
import { db } from "../firebase/firebase_app";
import "./Home.css";
import { useNavigate } from "react-router";
export default function Watchlist() {
  const [coins, setcoins] = useState([]);  
  const navigate=useNavigate();
  useEffect(() => {
    async function get_watchlist() {
      const q = query(collection(db, "watchlist"));
      const querySnapshot = await getDocs(q);
     const new_watchlist=querySnapshot.docs.map((doc)=>doc.data().coin_id) 
      const coin=await fetch(`https://api.coinlore.net/api/ticker/?id=${new_watchlist}`);
      const data=await coin.json();
      setcoins(data);
    }
    get_watchlist();  
  }, [db])

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

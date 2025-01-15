import { useLocation } from "react-router"

export default function Coin() {
  const {state}=useLocation();
  async function fetch_coin() {
   try{
      const val=await fetch(`https://api.coinlore.net/api/ticker/?id=${state.symbol}`);
      const data=await val.json();
   }catch(error){
     console.log(error)
   }
  } 
  fetch_coin();
 return <div>
    <div className="Coin-top">
       
    </div>
   </div> 
}

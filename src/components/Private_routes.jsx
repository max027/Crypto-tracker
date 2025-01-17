import { Navigate,Outlet } from "react-router";

export default function Private_routes(props) {
 return (
   props.loggedin? <Outlet/> : <Navigate to='/signup'/>
 )
}

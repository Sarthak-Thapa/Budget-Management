//Helper Functions
import { useLoaderData } from "react-router-dom";
import { fetchData } from "../../helper"

//Loader
export function DashboardLoader(){
  const userName = fetchData("userName");
  return {userName}
}

const Dashboard = () => {
  const {userName} = useLoaderData();
  return (
    <div><h1>Hello, {userName}</h1></div>
  )
}

export default Dashboard

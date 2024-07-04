//rrd imports
import { Outlet, useLoaderData } from "react-router-dom";

//helper Function
import { fetchData } from "../../helper"

//assets
import wave from "../assets/wave.svg"

//Components
import Nav from "../Components/Nav";

//Loader
export function MainLoader(){
  const userName = fetchData("userName");
  return {userName}
}

const Main = () => {
  const {userName} = useLoaderData();
  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>

  )
}

export default Main

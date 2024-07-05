//Helper Functions
import { useLoaderData } from "react-router-dom";
import { fetchData } from "../../helper"
import Intro from "../Components/Intro";
import { toast } from "react-toastify";

//Loader
export function DashboardLoader(){
  const userName = fetchData("userName");
  return {userName}
}

export async function dashboardAction({request}){
  const data = await request.formData();
  const formData = Object.fromEntries(data)
  try {
    throw new Error('ya done')  // Custome error
    localStorage.setItem("userName", JSON.stringify(formData.userName))
    return toast.success(`Welcome, ${formData.userName}`)
  } catch (e) {
    throw new Error("There was a problem creating your account.")
  }
}

const Dashboard = () => {
  const {userName} = useLoaderData();
  return (
    <>
    {
      userName? (<p>{userName}</p>) : <Intro/>
    }
    </>
  )
}

export default Dashboard

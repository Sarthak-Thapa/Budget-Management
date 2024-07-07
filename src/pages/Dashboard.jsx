//rrd imports
import { useLoaderData } from "react-router-dom";

//Helper Functions
import { fetchData } from "../../helper";

//Library
import { toast } from "react-toastify";

//components
import Intro from "../Components/Intro";
import AddBudgetForm from "../Components/AddBudgetForm";

//Loader
export function DashboardLoader() {
  const userName = fetchData("userName");
  const budget = fetchData("budget");
  return { userName, budget };
}

export async function dashboardAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try {
    // throw new Error('ya done')  // Custome error
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcome, ${formData.userName}`);
  } catch (e) {
    throw new Error("There was a problem creating your account.");
  }
}

const Dashboard = () => {
  const { userName, budget } = useLoaderData();
  return <>{userName ? <div className="dashboard">
    <h1>Welcome back, <span className="accent">{userName}</span></h1>
    <div className="grid-sm">
      {/* {budget? ():()} */}
      <div className="grid-lg">
        <div className="flex-lg">
          <AddBudgetForm/>
        </div>
      </div>
    </div>
  </div> : <Intro />}</>;
};

export default Dashboard;

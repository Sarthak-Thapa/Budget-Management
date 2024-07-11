//rrd imports
import { useLoaderData } from "react-router-dom";

//Helper Functions
import { createBudget, createExpense, fetchData, waait } from "../../helper";

//Library
import { toast} from "react-toastify";

//components
import Intro from "../Components/Intro";
import AddBudgetForm from "../Components/AddBudgetForm";
import AddExpenseForm from "../Components/AddExpenseForm";

//Loader
export function DashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
}

export async function dashboardAction({ request }) {
  //waiting 3 sec for creating budget
  await waait();
  const data = await request.formData();
  const {_action, ...values} = Object.fromEntries(data);
  // console.log(_action) // Checking if the newUser form is working or not


  if (_action === "newUser"){
    try {
      // throw new Error('ya done')  // Custome error
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch (e) {
      throw new Error("There was a problem creating your account.");
    }
  }

  if (_action === "createBudget"){
    try{
      //Create Budget
      createBudget({    //passing to helpers parameter and creating local Storage for adding budgets
        name: values.newBudget,
        amount: values.newBudgetAmount,
      })
      // throw new Error('Just Chicking if createBudget form is working or not')
      return toast.success('Budget Created')
    }catch(e){
      throw new Error ("There was a problem creating your budget.")
    }
  }

  if(_action === "createExpense"){
    try{
      //create expense
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      })

      return toast.success(`${values.newExpense} expense created`)
    }catch(e){
      throw new Error ("There was a problem creating your expense.")
    }
  }
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();

  return <>{userName ? <div className="dashboard">
    <h1>Welcome back, <span className="accent">{userName}</span></h1>
    <div className="grid-sm">
    {
              budgets && budgets.length > 0
                ? (
                  <div className="grid-lg">
                    <div className="flex-lg">
                      <AddBudgetForm />
                      <AddExpenseForm budgets={budgets} />
                    </div>
                  </div>
                )
                : (
                  <div className="grid-sm">
                    <p>Personal budgeting is the secret to financial freedom.</p>
                    <p>Create a budget to get started!</p>
                    <AddBudgetForm />
                  </div>
                )
            }
    </div>
  </div> : <Intro />}</>;
};

export default Dashboard;

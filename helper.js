//Local Storage

export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
}


//Generating color
const generateRandomColor = () => {
    const existingBudgetLength = fetchData("budgets")?.length ?? 0;
    return `${existingBudgetLength * 34} 65% 50%`
  }

//Logout DeleteItem
export const deleteItem = ({key}) => {
    return localStorage.removeItem(key)
}

export const createBudget = ({name, amount}) => {
    const newItem = {
        id: crypto.randomUUID(),    // same as math.random
        name: name,
        createdAt: Date.now(),      // milliseconds
        amount: +amount,            //Cause it into number
        color: generateRandomColor(),
    }

    // Checking if budget Exit
    const existingBudget = fetchData("budgets") ?? []
    return localStorage.setItem("budgets", JSON.stringify([...existingBudget, newItem]))    // adding both existing and newItmes

}
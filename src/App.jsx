//rrd imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Pages imports
import Dashboard, { DashboardLoader } from './pages/Dashboard';
import Error from './pages/Error';
import Main, { MainLoader } from './layouts/Main';

//Action imports
import { logoutAction } from './Actions/logout';

//library
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    loader: MainLoader,
    path: "/",
    element: <Main/>,
    errorElement: <Error/>,
    children:[{
      loader: DashboardLoader,
      path: "/",
      element: <Dashboard/>,
      errorElement: <Error/>
    },
    {
      path: "about",
      element: <Dashboard/>,
      errorElement: <Error/>
    },
    {
      path: "logout",
      action: logoutAction,
    },
    ]
  },
]
)

const App = () => {
  return <div>
    <RouterProvider router={router}/>
    <ToastContainer/>
  </div>;
}

export default App
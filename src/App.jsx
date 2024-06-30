import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard, { DashboardLoader } from './pages/Dashboard';
import Error from './pages/Error';
import Main, { MainLoader } from './layouts/Main';

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
    }
    ]
  },
]
)

const App = () => {
  return <div>
    <RouterProvider router={router}/>
  </div>;
}

export default App
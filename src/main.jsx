import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './roots/App.jsx'
import { createBrowserRouter,
          RouterProvider } 
         from 'react-router-dom'
import Recipes from './roots/Recipes.jsx'
import Errorpage from './components/Errorpage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />
  },
  {
    path: "recipes",
    element: <Recipes />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

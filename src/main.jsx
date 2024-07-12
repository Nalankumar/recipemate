import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './roots/App.jsx'
import { createBrowserRouter,
   RouterProvider } 
from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "<h1>404 Not found<h1>"
  },
  {
    path: "recipes",
    element: "<h1>this is recipe page</h1>"
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import ErrorPage from './ErrorPage'
import App from './App'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChakraProvider children={<App />} />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './routes/homepage/Homepage.jsx'
import Dashboard from './routes/dashboard/Dashboard.jsx'
import ChatPage from './routes/chatpage/ChatPage.jsx'
import RootLayout from './layouts/rootLayout.jsx'
import DashboardLayout from './layouts/dashboardLayout/dashboardLayout.jsx'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        
        element: <DashboardLayout />,
        children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/dashboard/chats/:id",
          element: <ChatPage />
        }
      ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

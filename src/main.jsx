import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MantineProvider } from '@mantine/core'
import { RouterProvider } from 'react-router-dom'
import '@mantine/core/styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  <MantineProvider>
  <RouterProvider router={App}/>
  </MantineProvider>
 
</React.StrictMode>,
)

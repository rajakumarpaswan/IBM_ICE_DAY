

import { createBrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Approval from './components/Approval'
import DriverProfile from './components/DriverProfile'

const App = createBrowserRouter(
  
  
  [
  
  {
  path:"/",
  element:<Login/>
},
{
  path:"/approval",
  element:<Approval/>
},
{
  path:"/driverprofile",
  element:<DriverProfile/>
}
])



export default App

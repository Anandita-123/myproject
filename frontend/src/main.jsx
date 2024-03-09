import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './routes/Root.jsx'
import Home from "./routes/Home.jsx"
import Login from "./routes/Login.jsx"
import Signup from "./routes/Signup.jsx"
import Veg from './routes/Veg.jsx'
import Family from './routes/Family.jsx'
import Breakfast from './routes/Breakfast.jsx'
import Pizza from './routes/Pizza.jsx'
import Cart from "./routes/Cart.jsx"
import Order from './routes/Order.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='veg' element={<Veg/>}/>
      <Route path='family' element={<Family/>}/>
      <Route path='breakfast' element={<Breakfast/>}/>
      <Route path='pizza' element={<Pizza/>}/>
      <Route path='cart/:itemId' element={<Cart/>}/>
      <Route path='order' element={<Order/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

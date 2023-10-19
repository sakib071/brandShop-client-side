import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddProduct from './AddProduct.jsx';
import MyCart from './MyCart.jsx';
import UpdateProduct from './UpdateProduct.jsx';
import Products from './Products.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('brandData.json')
  },
  {
    path: "addProduct",
    element: <Products></Products>,
    loader: () => fetch('http://localhost:5000/product')

  },
  {
    path: "addProduct",
    element: <AddProduct></AddProduct>,
  },
  {
    path: "myCart",
    element: <MyCart></MyCart>
  },
  {
    path: "updateProduct/:id",
    element: <UpdateProduct></UpdateProduct>,
    loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

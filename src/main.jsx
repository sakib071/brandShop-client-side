import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddProduct from './AddProduct.jsx';
import MyCart from './MyCart.jsx';
import UpdateProduct from './UpdateProduct.jsx';
import Products from './Products.jsx';
import Home from './Home.jsx';
import Root from '../Root.jsx';
import AuthProvider from './AuthProvider';
import Contact from './Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // loader: () => fetch('/brandData.json'),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/brandData.json')
      },
      {
        path: "/product",
        element: <Products></Products>,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        // loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

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
import Root from './Root.jsx';
import AuthProvider from './AuthProvider';
import Contact from './Contact';
import Register from './Register';
import Login from './Login';
import ProductsByBrand from './ProductsByBrand';
import PrivateRoute from './PrivateRoute';
import ErrorPage from './ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/brandData.json')
      },
      {
        path: "/product",
        element: <Products></Products>,
        loader: () => fetch('http://localhost:5000/product'),
      },
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
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
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "brands/:brandName",
        element: <ProductsByBrand></ProductsByBrand>,
      },
      {
        path: "product/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
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

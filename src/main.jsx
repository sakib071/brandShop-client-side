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
import ProductDetails from './ProductDetails';


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
        loader: () => fetch('https://technology-electronics-server-with-auth-q8ov57eni.vercel.app/product'),
      },
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: "/myCart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch('https://technology-electronics-server-with-auth-q8ov57eni.vercel.app/cart'),

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
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`https://technology-electronics-server-with-auth-q8ov57eni.vercel.app/product/${params.id}`)
      },
      {
        path: "product/details/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: () => fetch('https://technology-electronics-server-with-auth-q8ov57eni.vercel.app/product'),
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

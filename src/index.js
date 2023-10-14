import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import reportWebVitals from './reportWebVitals';

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFoundPage from './app/pages/NotFound/NotFoundPage';
import Home from './app/pages/Home/Home';
import App from './App';
import Login, { action as loginAction } from './app/pages/Authentication/Login/Login';
import Registration from './app/pages/Authentication/Registeration/Registration';
import Layout from './app/pages/Dashboard/Layout';
import Products from './app/pages/Dashboard/Pages/Products';
import ProductListComponent from './app/components/ProductListComponent/ProductListComponent';
import { Dashboard } from './app/pages/Dashboard/Dashboard';
import CategoriesLayout from './app/pages/CategoriesLayout/CategoriesLayout';
import ProductCategory from './app/pages/CategoriesLayout/Category/ProductCategory';



const router = createBrowserRouter(
  [
    {
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <Home /> },
        // {
        //   path: "products",
        //   element: <ProductsLayout />,
        //   children: [
        //     { index: true, element: <Products /> },
        //     { path: ":productId", element: <Product />, loader: productLoader },
        //   ],
        // },
        {
          path: "category",
          element: <CategoriesLayout />,
          children: [
            // { index: true, element: <Categories /> },
            { path: ":id", element: <ProductCategory /> },
          ],
        },
        { path: "register", element: <Registration /> },
        { path: "login", element: <Login />, action: loginAction },
        // { path: "forgot-password", element: <ForgotPassword /> },
        {
          path: "seller", element: <Layout />, children: [
            { index: true, element: <Dashboard /> },
            { path: "products", element: <Products /> },
          ]
        }, ,
        { path: "*", element: <NotFoundPage /> },
        { path: "products", element: <Products /> }
      ],
    }
    // createRoutesFromElements(
    //   <Route path='/' element={<Layout />}>
    //     <Route path='' element={<Home />} />
    //     <Route path='about' element={<About />} />
    //     <Route path='contact' element={<Contact />} />
    //     <Route path='user/:userid' element={<User />} />
    //     <Route 
    //     loader={githubInfoLoader}
    //     path='github' 
    //     element={<Github />}
    //      />
    //   </Route>
    // )
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

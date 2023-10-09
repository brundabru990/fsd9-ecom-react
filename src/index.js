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
import Login,{ action as loginAction } from './app/pages/Authentication/Login/Login'; 



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
      // {
      //   path: "categories",
      //   element: <CategoriesLayout />,
      //   children: [
      //     { index: true, element: <Categories /> },
      //     { path: ":categorySlug", element: <Category /> },
      //   ],
      // },  
      // { path: "register", element: <Register /> },
       { path: "login", element: <Login />, action: loginAction },
      // { path: "forgot-password", element: <ForgotPassword /> },
      { path: "*", element: <NotFoundPage /> },
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

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Produts from "../pages/Products";
import Template from "../Template";
import Profile from "../pages/Profile";
import ProductCategory from "../pages/ProductCategory";
//membuat data konfigurasi routing =>  createBrowserRouter

// membuat daftar routing
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    // mengisi <Outlet/> di Template.jsx
    children: [
      // untuk mengisi dari outlet nya
      { path: "/", element: <App /> },
      { path: "/products", element: <Produts /> },
      { path: "/profile", element: <Profile /> },
      { path: "/categories/:categoryId", element: <ProductCategory /> },
    ],
  },
]);

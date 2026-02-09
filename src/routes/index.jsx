import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Produts from "../pages/Products";
import Template from "../Template";
import Profile from "../pages/Profile";
import ProductCategory from "../pages/ProductCategory";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import { auth } from "../middleware/auth";
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
      { path: "/login", element: <Login /> },
    ],
  },
  {
    path: "/",
    element: <Template />,
    loader: auth, // menjalankan funsi ketika proses perpindahan halaman, menjalankan peengecekan middleware/auth.js baru menerkan halaman
    // mengisi <Outlet/> di Template.jsx
    children: [{ path: "/cart", element: <Cart /> }],
  },
]);

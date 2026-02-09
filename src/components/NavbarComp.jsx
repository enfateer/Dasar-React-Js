import { Button, Navbar, NavbarBrand } from "flowbite-react";
import { FcPaid } from "react-icons/fc";
import imageLogo from "../assets/store-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Dropdown, DropdownItem, NavbarToggle } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";

export default function NavbarComp() {
  // menggunakan context
  const { isLogin, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleLogout() {
    // oanggil functin logout dari context
    logout();
    // pindahka halaman, navigate tidak bisa digunakan di context
    navigate("/");
  }

  return (
    <Navbar fluid rounded className="px-10 py-5 ">
      <NavbarBrand href="/">
        <img
          src={imageLogo}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Fake Store App
        </span>
      </NavbarBrand>
      <div className="flex gap-5">
        <div className="flex md:order-2 mt-2">
          <Link to="/cart">
            <FcPaid className="text-2xl mt-2" />
          </Link>
          {isLogin && (
            <Button color="red" className="ms-3" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </div>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Link to="/profile">
              <DropdownItem>Profile</DropdownItem>
            </Link>
            <Link to="/login">
              <DropdownItem>Login</DropdownItem>
            </Link>
          </Dropdown>
          <NavbarToggle />
        </div>
      </div>
    </Navbar>
  );
}

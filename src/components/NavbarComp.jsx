import { Navbar, NavbarBrand } from "flowbite-react";
import { FcPaid } from "react-icons/fc";
import imageLogo from "../assets/store-removebg-preview.png";
import { Link } from "react-router-dom";
import { Avatar, Dropdown, DropdownItem, NavbarToggle } from "flowbite-react";

export default function NavbarComp() {
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
          <FcPaid className="text-2xl" />
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
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>
      </div>
    </Navbar>
  );
}

"use client";
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import Image from "next/image";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import MyFormInputAceternity from "@/components/ui/MyForm/MyFormInputAceternity/MyFormInputAceternity";
import { IoSearchSharp } from "react-icons/io5";
import { FieldValues } from "react-hook-form";
import DropDownMenus from "../DropDownMenus/DropDownMenus";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function MobileNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const handleSubmit = (data: FieldValues, reset: any) => {
    console.log("Form Data:", data);
    // reset(); // Uncomment this line to reset the form after submission
  };

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      {/* mobile burger menu start */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>
      {/* mobile burger menu end */}

      {/*Mobile Logo start */}
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>
      {/*Mobile Logo end */}

      {/* tab menu start */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Logo</p>
        </NavbarBrand>
        <NavbarItem>
          {/* dorp down menus start */}
          <DropDownMenus />
          {/* dorp down menus end */}
        </NavbarItem>
      </NavbarContent>
      {/* tab menu end */}

      {/* right side start */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      {/* right side end */}

      {/* mobile menu items start */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color={index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"} href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      {/* mobile menu items end */}
    </Navbar>
  );
}

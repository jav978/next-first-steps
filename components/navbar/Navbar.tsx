"use client"
import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import ActiveLink from "../active-link/ActiveLink";


const navItems = [
  {path:'/about', text:'About'},
  {path:'/pricing', text:'Pricing'},
  {path:'/contact', text:'Contact'},
]



const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-4 -m-2 rounded items-center justify-center align-center">

     <Link  className="flex items-center" href="/">
      <HomeIcon  className="mr-2"/>
     <span>Home</span>
     </Link>
      <div className="flex flex-1"></div>

      {navItems.map(navItem =>(

        <ActiveLink key={navItem.path} {...navItem} />

      ))}
      
    </nav>
  );
};

export default Navbar;

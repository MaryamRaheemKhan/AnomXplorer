import React from 'react'
import { IoLogoFlickr } from "react-icons/io";
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import AccessTimeFilledSharpIcon from '@mui/icons-material/AccessTimeFilledSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import { FaMagnifyingGlassChart } from "react-icons/fa6";

export const SidebarData= [
 {
      title: "Home",
      path: "/Home",
      icon: <HomeSharpIcon/>,
      cName:"nav-text"
 },

 {
  
    title: "Log",
    path: "/Log",
    icon: <IoLogoFlickr/>,
    cName:"nav-text"
 }

 ,

 {
  
   title: "Dashboard",
   path: "/Dashboard",
   icon: <DashboardSharpIcon/>,
   cName:"nav-text"
}
,
{
   title: "Anomaly",
   path: "/Anomaly",
   icon: <AccessTimeFilledSharpIcon/>,
   cName: "nav-text",

}

]


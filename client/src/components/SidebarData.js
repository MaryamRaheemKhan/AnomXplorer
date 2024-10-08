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
      icon: <IoLogoFlickr/>,
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
   icon: <IoLogoFlickr/>,
   cName:"nav-text"
}

,

{
   title: "Anomaly",
   path: "/Anomaly",
   icon: <IoLogoFlickr />   ,
   cName: "nav-text",

  //  subNav: [
  //    {
  //      title: "Doctor Check In",
  //      path: "/DoctorCheckIn",
  //     //  icon: <IoLogoFlickr />,
  //      cName: "nav-text",
  //    },
  //   //  {
    //   title: "Total Cost Insurance ",
    //   path: "/TotalCostInsurance",
    //   // icon: <IoLogoFlickr />,
    //   cName: "nav-text",
    // }, 
    //  {
    //    title: "Blood Test",
    //    path: "/BloodTest",
    //   //  icon: <IoLogoFlickr />,
    //    cName: "nav-text",
    //  },
    //  {
    //    title: "Nurse Presence",
    //    path: "/NursePresence",
    //   //  icon: <IoLogoFlickr />,
    //    cName: "nav-text",
    //  },

    //  {
    //   title: "Bed Assign ",
    //   path: "/BedAssign",
    //   // icon: <IoLogoFlickr />,
    //   cName: "nav-text",
    // },

    
  //  ],
 }


]


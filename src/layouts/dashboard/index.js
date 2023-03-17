import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/Images/logo.ico"
import useSettings from "../../hooks/useSettings";
import { Nav_Buttons, Nav_Setting } from "../../data";
import AntSwitch from "../../components/AntSwitch";
import { faker, Faker } from "@faker-js/faker";
import SideNav from "./SideNav";
import useResponsive from "../../hooks/useResponsive";







const DashboardLayout = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  const { onToggleMode } = useSettings();

  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChangeTab = (index) => {
    setSelectedTab(index);
  };


  return (
    <>

    <Stack direction="row" >

   
          <SideNav />
      
          <Outlet />
    </Stack>
    </>
  );
};

export default DashboardLayout;

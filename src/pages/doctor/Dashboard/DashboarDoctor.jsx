import React from "react";

import { Outlet } from "react-router-dom";
import Navigation from "../../../components/Dashboard/Doctor/Navigation";

const DashboarDoctor = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-5 w-full h-screen">
      <div className="row-span-5 w-full p-5">
        <Navigation />
      </div>
      <div className="col-span-5 row-span-5 w-full pr-5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboarDoctor;

import React from "react";
import Navi from "./Navi";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <Navi />
      <div style={{ minHeight: "85vh" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
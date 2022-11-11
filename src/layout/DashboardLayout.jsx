import React, { useEffect, useState } from "react";
import { getAllActivity } from "../services/activity.services";

export default function DashboardLayout({ children, title }) {
  return (
    <div>
      <div className="bg-blue-400">
        <div className="mx-36 py-5">
          <h1 className="text-white font-bold">TO DO LIST APP</h1>
        </div>
      </div>
      <div className="mx-36 py-5 flex flex-col gap-5">
        <div>{children}</div>
      </div>
    </div>
  );
}

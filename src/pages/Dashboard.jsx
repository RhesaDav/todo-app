import React, { useEffect, useState } from "react";
import { getAllActivity } from "../services/activity.services";
import DashboardLayout from "../layout/DashboardLayout";
import activityEmptyImage from "../assets/activity-empty-state.png";
import { FiTrash2 } from "react-icons/fi";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate()
  const [activityData, setActivityData] = useState([]);

  const loadAllActivity = async () => {
    await getAllActivity().then((res) => {
      setActivityData(res.data.data);
      console.log(activityData);
    });
  };

  useEffect(() => {
    loadAllActivity();
  }, []);
  return (
    <div>
      <DashboardLayout title="Activity">
      <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>Activity</h1>
          <button className='bg-blue-400 px-2 py-1 rounded-2xl hover:bg-blue-500 text-white'>+ Tambah</button>
        </div>
        <div className="mx-5">
          {activityData ? (
            <div className="grid grid-cols-4">
              {activityData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white m-5 flex flex-col rounded-xl shadow-xl p-4 justify-between"
                >
                  <h1 className="font-bold text-xl hover:text-blue-500 hover:underline" onClick={() => navigate(`/list/${item.id}`)}>{item.title}</h1>
                  <div className="flex mt-24 justify-between items-center">
                    <span className="text-xs text-gray-500">
                      {moment(item.created_at).format("D MMM YYYY")}
                    </span>
                    <FiTrash2 className="h-5 w-5 text-gray-500" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div>
                <img src={activityEmptyImage} alt="" />
              </div>
            </div>
          )}
        </div>
      </DashboardLayout>
    </div>
  );
}

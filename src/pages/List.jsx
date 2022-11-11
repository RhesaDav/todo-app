import React, { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import itemEmpty from "../assets/todo-empty-state.png";
import { useNavigate, useParams } from "react-router-dom";
import {
  createTodoItem,
  getActivityDetail,
  getTodoDetail,
} from "../services/activity.services";
import { FiTrash2 } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import DialogModal from "../components/DialogModal";
import {FiChevronLeft} from "react-icons/fi"

export default function List() {
  const { id } = useParams();
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");

  const loadTodoDetail = () => {
    getActivityDetail(id)
      .then((res) => {
        if (res.data.todo_items.length > 0) {
          console.log(res.data.todo_items)
          setData(res.data.todo_items); 
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleSave = (e) => {
    const data = {
      activity_group_id: id,
      title: todoTitle,
    };
    console.log(data);
    createTodoItem(id, data).then((res) => console.log(res));
  };

  useEffect(() => {
    loadTodoDetail();
  }, []);

  return (
    <div>
      <DashboardLayout title="New Activity">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold hover:text-blue-500 cursor-pointer hover:underline flex items-center gap-2" onClick={() => navigate('/')}> <FiChevronLeft/> New Item</h1>
          <button
            className="bg-blue-400 px-2 py-1 rounded-2xl hover:bg-blue-500 text-white"
            onClick={() => setShowModal(true)}
          >
            + Tambah
          </button>
        </div>

        <div>
          {data.length >0 ? (
            <div>
              {data.map((item, index) => (
                <div key={index} className="mx-2 my-5">
                  <div className="flex bg-white px-5 py-4 rounded-lg shadow-2xl justify-between items-center">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" name="" id="" />
                      <div className="flex items-center">
                        <BsDot className="h-10 w-10 text-red-600" />
                        <h1 className="text-2xl">{item.title}</h1>
                      </div>
                    </div>
                    <FiTrash2 />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center">
              <img src={itemEmpty} alt="" />
            </div>
          )}
        </div>
      </DashboardLayout>
      <DialogModal isOpen={showModal} onClose={handleShowModal} title='add'>
        <div className="flex flex-col gap-5 w-64 bg-green-200">
          <div className="flex flex-col">
            <label>NAMA LIST ITEM</label>
            <input
              onChange={(e) => setTodoTitle(e.target.value)}
              className="border"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label>PRIORITY</label>
            <select>
              <option value="">Very High</option>
              <option>Low</option>
            </select>
          </div>
          <div>
            <button onClick={handleSave}>Simpan</button>
          </div>
        </div>
      </DialogModal>
    </div>
  );
}

import React from "react";

import { Link } from "react-router-dom";
import { deleteUser } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Tablerow = ({ user }) => {
const dispatch = useDispatch()
  return (
    <div className="flex border-b border-gray-300 last:border-none">
      <div className="w-1/5 border-r border-gray-300 p-3 truncate">
        {user.name}
      </div>
      <div className="w-1/5 border-r border-gray-300 p-3 truncate">
        {user.username}
      </div>
      <div className="w-1/5 border-r border-gray-300 p-3 truncate">
        {user.email}
      </div>
      <div className="w-1/5 border-r border-gray-300 p-3 truncate">{`${user.address.street},${user.address.suite},${user.address.city},${user.address.zipcode}`}</div>
      <div className="w-1/5 border-r border-gray-300 p-3 truncate">
        {user.phone}
      </div>
      <div className="w-1/5 border-r border-gray-300 p-3 truncate">
        {user.website}
      </div>
      <div className="w-1/5 border-r border-gray-300 p-3 truncate">
        {user.company.name}
      </div>
      <div className="w-1/5 p-3">
        <Link
          to={`/users/${user.id}`}>
          <button className="px-2 py-1 bg-blue-500 hover:bg-red-700 text-white rounded mr-1"
        >
          Open
          </button>
        </Link>
        <button onClick={()=>dispatch(deleteUser(user.id))} className="px-2 py-1 bg-blue-500 hover:bg-red-700 text-white rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Tablerow;

import React, { useEffect, useState } from "react";
import Tablerow from "./Tablerow";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../utils/appSlice";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const Table = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.app.users);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState();

  useEffect(() => {
    fetchUsersdata();
  }, []);

  const fetchUsersdata = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch(fetchUsers(res.data));
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection((prevDirection) =>
        prevDirection === "asc" ? "desc" : "asc"
      );
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (sortColumn === "name") {
      return sortDirection === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    }
    if (sortColumn === "email") {
      return sortDirection === "asc"
        ? a.email.localeCompare(b.email)
        : b.email.localeCompare(a.email);
    }
    return 0;
  });

  return (
    <div className="p-2">
      {/* Rows per page  */}
      <div className="flex items-center p-2 justify-end">
        <span className="mr-2">Rows per page:</span>
        <select
          value={rowsPerPage}
          onChange={(e) => setRowsPerPage(e.target.value)}
          className="px-2 py-1 border border-gray-300 rounded"
        >
          {[...Array(users.length)].map((_, index) => (
            <option value={index + 1}>{index + 1}</option>
          ))}
        </select>
      </div>
      <div className="flex-col border border-gray-300 shadow rounded">
        {/* Table headers  */}
        <div className="flex border-b border-gray-300 bg-gray-50">
          <div
            onClick={() => handleSort("name")}
            className="w-1/5 border-r border-gray-300 p-3 font-bold cursor-pointer flex items-center gap-1"
          >
            Name
            {sortColumn === "name" && (
              <span className="bg-gray-200 p-1">
                {sortDirection === "asc" ? (
                  <AiOutlineArrowUp />
                ) : (
                  <AiOutlineArrowDown />
                )}
              </span>
            )}
            {sortColumn!=="name" && <span className="p-1"><AiOutlineArrowUp /></span>}
          </div>
          <div className="w-1/5 border-r border-gray-300 p-3 font-bold">
            Username
          </div>
          <div
            onClick={() => handleSort("email")}
            className="w-1/5 border-r border-gray-300 p-3 font-bold cursor-pointer flex items-center gap-1"
          >
            Email
            {sortColumn === "email" && (
              <span className="bg-gray-200 p-1">
                {sortDirection === "asc" ? (
                  <AiOutlineArrowUp />
                ) : (
                  <AiOutlineArrowDown />
                )}
              </span>
            )}
            {sortColumn!=="email" && <span className="p-1"><AiOutlineArrowUp /></span>}
          </div>
          <div className="w-1/5 border-r border-gray-300 p-3 font-bold">
            Address
          </div>
          <div className="w-1/5 border-r border-gray-300 p-3 font-bold">
            Phone
          </div>
          <div className="w-1/5 border-r border-gray-300 p-3 font-bold">
            Website
          </div>
          <div className="w-1/5 border-r border-gray-300 p-3 font-bold">
            Company
          </div>
          <div className="w-1/5 font-bold p-3">Actions</div>
        </div>
        {sortedUsers
          ?.slice(
            currentPage * rowsPerPage - rowsPerPage,
            currentPage * rowsPerPage
          )
          .map((user) => (
            <Tablerow key={user.id} user={user} />
          ))}
        <div className="flex justify-center mt-4">
          <nav className="mb-3">
            {[...Array(Math.ceil(users.length / rowsPerPage))].map(
              (_, index) => (
                <button
                  key={index}
                  className={`w-10 py-2 rounded ${
                    currentPage === index + 1
                      ? "bg-red-700 text-white"
                      : "bg-blue-500 text-white"
                  } hover:bg-red-700 mr-2`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              )
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Table;

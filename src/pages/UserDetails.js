import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../utils/appSlice";
import axios from "axios";
import { useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";

const UserDetails = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState()

  useEffect(() => {
    fetchUserDetails();
  }, [id]);

  const fetchUserDetails = async () => {
    if (!userDetails||userDetails.id !== id) {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUserDetails(res.data)
    }
  };

  if (!userDetails) {
    return <div className="flex justify-center min-h-screen items-center "><InfinitySpin 
    width='200'
    color="#3B82F6"
  /></div>;
  }
  const { name, username, email, phone, website, company, address } = userDetails;
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
     <div className="bg-white rounded shadow p-8">
        <h2 className="text-3xl font-semibold mb-4">{name}</h2>
        <div className="mb-4">
          <strong>Username:</strong> {username}
        </div>
        <div className="mb-4">
          <strong>Email:</strong> {email}
        </div>
        <div className="mb-4">
          <strong>Address:</strong>{" "}
          {`${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`}
        </div>
        <div className="mb-4">
          <strong>Phone:</strong> {phone}
        </div>
        <div className="mb-4">
          <strong>Website:</strong> {website}
        </div>
        <div className="mb-4">
          <strong>Company:</strong> {company.name}
        </div>
      </div>  
    </div>
  );
};

export default UserDetails;

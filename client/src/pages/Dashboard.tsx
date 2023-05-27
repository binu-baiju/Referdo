import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from 'jwt-decode'

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/login", { replace: true });
      }
       
    }
  }, []);
  return <h1>Dashboard</h1>;
};

export default Dashboard;

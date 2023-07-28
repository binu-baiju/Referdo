import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/home";
import Dashboard from "./pages/Dashboard";
import Form from "./pages/form";


import Login from "./pages/login";



import EditProfile from "./components/EditProfile";
import Sampleform from "./pages/sample_form";
import Card from "./pages/Card";
import Payment from "./pages/Payment";
import Dashboardnew from "./pages/Dashboardnew";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardnew" element={<Dashboardnew />} />

        <Route  path="/login/*" element={<Login />} />
        <Route  path="/form/user/:userId/dev/:linkName" element={<Form />} />
        {/* <Route  path="/dashboard/cardmodal" element={<Card/>} /> */}
        <Route  path="/dashboard/editprofile" element={<EditProfile />} />
        <Route  path="/sampleform" element={<Sampleform />} />
        <Route  path="/subscribe" element={<Payment />} />
       

      </Routes>
    </Router>
  );
}

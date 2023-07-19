import React from "react";
import "./App.css";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import List from "./Components/List";
import AddNewCustomer from "./Components/AddCustomer";
import { Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/list" element={<List />} />
        <Route path="/addcustomers" element={<AddNewCustomer />} />
      </Routes>
    </div>
  );
}

export default App;

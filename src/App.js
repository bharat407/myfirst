import React from "react";
import "./App.css";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import List from "./Components/List";
import AddNewCustomer from "./Components/AddCustomer";
import Product from "./Components/Admin/Product";
import AddNewProduct from "./Components/Admin/AddProduct";
import ImportProductsForm from "./Components/Admin/Import";
import ImportCustomerForm from "./Components/importCustomer";
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
        <Route path="/product" element={<Product />} />
        <Route path="/addproduct" element={<AddNewProduct />} />
        <Route path="/importfile" element={<ImportProductsForm />} />
        <Route path="/importcustomerfile" element={<ImportCustomerForm />} />
      </Routes>
    </div>
  );
}

export default App;

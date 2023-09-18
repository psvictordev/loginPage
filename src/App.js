import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dogs from "./Pages/Dogs";
import AddPage from "./Pages/AddPage";
import EditPage from "./Pages/EditPage";
import PrivateRoute from "./Pages/PrivateRoute";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dogs />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/Dogs/AddPage"
          element={
            <PrivateRoute>
              <AddPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/Dogs/:id/EditPage"
          element={
            <PrivateRoute>
              <EditPage />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

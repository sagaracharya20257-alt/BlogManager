import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Posts from "./components/Posts";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";

export default function App() {
  const isAuth = useSelector((s) => s.auth.isAuth);

  return (
    <Routes>
      <Route path="/" element={isAuth ? <Navigate to="/posts" /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/posts"
        element={
          <ProtectedRoute>
            <Posts />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

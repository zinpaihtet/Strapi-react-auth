import React from "react";
import SingIn from "./compoments/SingIn";
import Header from "./compoments/Header";
import SignUp from "./compoments/SignUp";
import { AuthContext } from "./Context/AuthContext";
import { Routes, Route, Navigate } from "react-router";
function MyApp() {
  const { currentUser } = React.useContext(AuthContext);
  return (
    <div>
      <Header />

      {!currentUser && (
        <Routes>
          <Route path="/" element={<Navigate replace to="/signin" />} />
          <Route path="/signin" element={<SingIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
      {/* {currentUser && (
        <Routes>
          <Route path="/logout" element={<SingIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )} */}
    </div>
  );
}

export default MyApp;

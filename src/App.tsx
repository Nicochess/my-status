import React from "react";
import LoginScreen from "./screens/Login";
import RegisterScreen from "./screens/Register";
import { GlobalStyles } from "./theme/globalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/Home/HomeScreen";
import ProfileScreen from "./screens/Profile/ProfileScreen";

const App: React.FC = () => {
  return (
    <Router basename="/">
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </Router>
  );
};

export default App;

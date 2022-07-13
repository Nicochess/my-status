import React from "react";
import LoginScreen from "./screens/Login";
import RegisterScreen from "./screens/Register";
import { GlobalStyles } from "./theme/globalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router basename="/">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    </Router>
  );
};

export default App;

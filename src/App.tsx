import React from "react";
import LoginScreen from "./screens/Login";
import RegisterScreen from "./screens/Register";
import { GlobalStyles } from "./theme/globalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/Home/HomeScreen";
import ProfileScreen from "./screens/Profile/ProfileScreen";
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "./store/provider/AuthProvider";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router basename="/">
        <GlobalStyles />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Route>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

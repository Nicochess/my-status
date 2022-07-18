import React from "react";
import LoginScreen from "./screens/Login";
import RegisterScreen from "./screens/Register";
import { GlobalStyles } from "./theme/globalStyle";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/Home/HomeScreen";
import ProfileScreen from "./screens/Profile/ProfileScreen";
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "./store/provider/AuthProvider";
import ForgotPasswordScreen from "./screens/ForgotPassword/ForgotPasswordScreen";

const App: React.FC = () => {
  return (
    <Router basename="/">
      <AuthProvider>
        <GlobalStyles />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Route>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/forgot" element={<ForgotPasswordScreen />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;

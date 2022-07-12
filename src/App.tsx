import React from "react";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import { GlobalStyles } from "./theme/globalStyle";

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <LoginScreen />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { Input, InputContainer, StyledMenu } from "./styles";
import { GroupAdd, Home, Person } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const color = {
  color: "#939393",
};

const Menubar: React.FC = () => {
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const { pathname } = useLocation();

  return (
    <StyledMenu>
      {pathname === "/profile" ? (
        <Link to="/home">
          <Button sx={color}>
            <Home />
          </Button>
        </Link>
      ) : (
        <Link to="/profile">
          <Button sx={color}>
            <Person />
          </Button>
        </Link>
      )}

      <Button sx={color} onClick={() => setShowAdd((prev) => !prev)}>
        <GroupAdd />
      </Button>

      {showAdd && (
        <InputContainer>
          <Input placeholder="Insert your friend code" />
        </InputContainer>
      )}
    </StyledMenu>
  );
};

export default Menubar;

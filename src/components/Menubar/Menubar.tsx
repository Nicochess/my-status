import React, { useContext, useRef, useState } from "react";
import { Input, InputContainer, StyledMenu, SubmitInput } from "./styles";
import { GroupAdd, Home, Person, Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../store/context/AuthContext";

const color = {
  color: "#939393",
};

const Menubar: React.FC = () => {
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const { pathname } = useLocation();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { addFriend } = useContext(AuthContext);

  const handleClick = () => {
    setShowAdd((prev) => !prev);
    if (!inputRef.current) return;
    addFriend(inputRef.current?.value);
  };

  return (
    <StyledMenu>
      {pathname === "/profile" ? (
        <Link to="/">
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
          <Input
            placeholder="Insert your friend code"
            ref={inputRef}
            autoFocus
          />
          <SubmitInput onClick={handleClick}>
            <Search sx={color} />
          </SubmitInput>
        </InputContainer>
      )}
    </StyledMenu>
  );
};

export default Menubar;

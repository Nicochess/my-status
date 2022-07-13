import React, { useState } from "react";
import { Input, InputContainer, StyledMenu } from "./styles";
import { GroupAdd, Person } from "@mui/icons-material";
import { Button } from "@mui/material";

const color = {
  color: "#939393",
};

const Menubar: React.FC = () => {
  const [showAdd, setShowAdd] = useState<boolean>(false);
  return (
    <StyledMenu>
      <Button sx={color} onClick={() => setShowAdd((prev) => !prev)}>
        <GroupAdd />
      </Button>
      <Button sx={color}>
        <Person />
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

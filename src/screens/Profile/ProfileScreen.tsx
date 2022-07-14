import { CopyAll } from "@mui/icons-material";
import { Snackbar } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputFile from "../../components/InputFile";
import Menubar from "../../components/Menubar";
import SettingsButton from "../../components/SettingsButton/SettingsButton";
import { Container } from "./styles";

const ProfileScreen: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const copyCode = () => {
    navigator.clipboard.writeText("923-1021das91-2nd0a=1");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Menubar />
      <Container>
        <InputFile
          labelText="Profile Picture"
          image="https://avatars.githubusercontent.com/u/51419598?v=4"
        />
        <SettingsButton
          text="Copy your code"
          Icon={<CopyAll sx={{ color: "#939393" }} />}
          onClick={copyCode}
        />
        <Link to="/login">Logout</Link>
      </Container>
      <Snackbar
        open={open}
        message="Code copied!"
        onClose={handleClose}
        autoHideDuration={2000}
      />
    </>
  );
};

export default ProfileScreen;

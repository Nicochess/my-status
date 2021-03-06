import { Logout, QrCode } from "@mui/icons-material";
import { Snackbar } from "@mui/material";
import React, { useContext, useState } from "react";
import InputFile from "../../components/InputFile";
import Menubar from "../../components/Menubar";
import SettingsButton from "../../components/SettingsButton/SettingsButton";
import { AuthContext } from "../../store/context/AuthContext";
import { Container } from "./styles";

const style = { color: "#939393" };

const ProfileScreen: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { currentUser, logout } = useContext(AuthContext);

  const copyCode = () => {
    const code = currentUser?.uid;
    if (!code) return;

    navigator.clipboard.writeText(code);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Menubar />
      <Container>
        <InputFile labelText={currentUser?.displayName || "Profile Picture"} />
        <SettingsButton
          text="Copy your code"
          Icon={<QrCode sx={style} />}
          onClick={copyCode}
        />
        <SettingsButton
          text="Logout"
          onClick={logout}
          Icon={<Logout sx={style} />}
        />
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

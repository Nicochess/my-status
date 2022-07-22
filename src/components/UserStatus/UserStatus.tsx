import React, { useContext, useState } from "react";
import { Status, StyledStatus } from "./styles";
import Fallback from "../../assets/icon.png";
import { DeleteForever } from "@mui/icons-material";
import { AuthContext } from "../../store/context/AuthContext";

type Props = {
  name: string;
  status: boolean;
  profile: string;
  setChange?: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

const UserStatus: React.FC<Props> = ({
  name,
  status,
  profile,
  id,
  setChange,
}) => {
  const [image, setImage] = useState<string>(Fallback);
  const fallbackImage = () => setImage(Fallback);
  const [viewDelete, setViewDelete] = useState<boolean>(false);
  const { deleteFriend } = useContext(AuthContext);

  const removeUser = () => {
    if (!setChange) return;
    deleteFriend(id);
    setChange((prev) => !prev);
  };

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if(target.tagName === "path") return 
    setViewDelete((prev) => !prev);
  };

  return (
    <StyledStatus onClick={handleClick}>
      <img
        src={image}
        alt={name}
        onError={fallbackImage}
        onLoad={() => setImage(profile)}
      />
      <p>{name}</p>

      <section>
        {viewDelete ? (
          <DeleteForever
            sx={{ color: "red" }}
            fontSize="small"
            onClick={removeUser}
            name="remove"
          />
        ) : (
          <Status status={status} />
        )}
      </section>
    </StyledStatus>
  );
};

export default UserStatus;

import React, { ChangeEvent, useContext, useState } from "react";
import { StyledFile } from "./styles";
import Fallback from "../../assets/fallback.png";
import { updateProfile, User } from "firebase/auth";
import { AuthContext } from "../../store/context/AuthContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";

type Props = {
  labelText: string;
  setFormData?: React.Dispatch<React.SetStateAction<Form>>;
};

const InputFile: React.FC<Props> = ({ labelText, setFormData }) => {
  const { currentUser } = useContext(AuthContext);
  const [imageStorage, setImageStorage] = useState<string>(
    currentUser?.photoURL || Fallback
  );

  const previewImage = async (e: ChangeEvent) => {
    const inputImage = e.target as HTMLInputElement;
    if (!inputImage.files?.length) return;

    try {
      if (setFormData) {
        setFormData((prev) => ({ ...prev, file: inputImage.files }));
      }

      if (!currentUser) return;
      const imageRef = ref(storage, `profile/${currentUser.uid}`);

      await uploadBytes(imageRef, inputImage.files[0]);
      const photoURL = await getDownloadURL(imageRef);
      setImageStorage(photoURL);
      await updateProfile(currentUser, { photoURL });
    } catch (error) {
      console.log(error);
    }
  };

  const updateImage = async (file: Blob, user: User) => {};

  return (
    <StyledFile>
      <label htmlFor={labelText}>{labelText}</label>
      <input
        name={labelText}
        id={labelText}
        type="file"
        onChange={previewImage}
      />

      <img src={imageStorage} alt={labelText} />
    </StyledFile>
  );
};

export default InputFile;

import React, { ChangeEvent, useContext, useState } from "react";
import { StyledFile } from "./styles";
import Fallback from "../../assets/fallback.png";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../store/context/AuthContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";

type Props = {
  labelText: string;
  setFormData?: React.Dispatch<React.SetStateAction<Form>>;
};

const InputFile: React.FC<Props> = ({ labelText, setFormData }) => {
  const { currentUser } = useContext(AuthContext);
  const [imageStorage, setImageStorage] = useState<string>(Fallback);

  const [error, setError] = useState<boolean>(false);

  const previewImage = async (e: ChangeEvent) => {
    const inputImage = e.target as HTMLInputElement;
    if (!inputImage.files?.length) return;
    const fileSize = inputImage.files[0].size / 1024 / 1024;
    if (fileSize > 2) {
      setError(true);
      return;
    }
    setError(false);

    try {
      if (setFormData) {
        setFormData((prev) => ({ ...prev, file: inputImage.files }));
      }
      setImageStorage(URL.createObjectURL(inputImage.files[0]));

      if (!currentUser) return;
      const imageRef = ref(storage, `profile/${currentUser.uid}`);

      await uploadBytes(imageRef, inputImage.files[0]);
      const photoURL = await getDownloadURL(imageRef);
      await updateProfile(currentUser, { photoURL });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledFile>
      <label htmlFor={labelText}>{labelText}</label>
      <input
        name={labelText}
        id={labelText}
        type="file"
        accept="image/*"
        onChange={previewImage}
      />

      <img
        src={imageStorage}
        alt={labelText}
        onError={() => setImageStorage(Fallback)}
        onLoad={() => setImageStorage(currentUser?.photoURL || Fallback)}
      />
      {error && <p>Your file is bigger than 2MBs.</p>}
    </StyledFile>
  );
};

export default InputFile;

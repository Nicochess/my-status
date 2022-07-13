import React, { ChangeEvent, useState } from "react";
import { StyledFile } from "./styles";
import Fallback from "../../assets/fallback.png";

type Props = {
  labelText: string;
};

const InputFile: React.FC<Props> = ({ labelText }) => {
  const [img, setImg] = useState<string>(Fallback);

  const previewImage = (e: ChangeEvent) => {
    const inputImage = e.target as HTMLInputElement

    if (!inputImage.files?.length) {
        return;
    }
    const imageURL = URL.createObjectURL(inputImage.files[0])
    setImg(imageURL)
  }

  return (
    <StyledFile>
      <label htmlFor={labelText}>{labelText}</label>
      <input name={labelText} id={labelText} type="file" onChange={previewImage}/>
      <img
        src={img}
        alt={labelText}
      />
    </StyledFile>
  );
};

export default InputFile;

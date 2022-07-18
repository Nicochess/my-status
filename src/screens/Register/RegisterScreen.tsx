import React, { useContext, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import InputFile from "../../components/InputFile";
import { Container, LinkStyled } from "../../theme/stylesScreens";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/context/AuthContext";

const initialState: Form = {
  email: "",
  password: "",
  confirm: "",
  username: "",
  file: {} as FileList,
};

const RegisterScreen: React.FC = () => {
  const [firstStep, setFirstStep] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<Form>(initialState);
  const [disable, setDisable] = useState<boolean>(true);
  const navigate = useNavigate();
  const { registerUser } = useContext(AuthContext);

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setDisable(true);
    setFormData((prev) => {
      const newForm = { ...prev, [target.name]: target.value };
      if (newForm.username && newForm.password && newForm.confirm) {
        setDisable(false);
      }
      return newForm;
    });
  };

  const nextStep = () => {
    setFirstStep((prev) => !prev);
  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      registerUser(formData);
      navigate("/");
    } catch (error) {
      alert("Bruh");
    }
    setLoading(false);
  };

  return (
    <Container>
      <h1>My Status</h1>
      {firstStep ? (
        <section>
          <Input
            labelText="Username"
            onChange={handleChange}
            name="username"
            value={formData.username}
          />
          <Input
            labelText="Password"
            onChange={handleChange}
            name="password"
            value={formData.password}
          />
          <Input
            labelText="Confirm password"
            onChange={handleChange}
            name="confirm"
            value={formData.confirm}
          />
        </section>
      ) : (
        <section>
          <InputFile labelText="Profile Picture" setFormData={setFormData} />
          <Input
            labelText="Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
        </section>
      )}

      {firstStep ? (
        <Button disabled={disable} onClick={nextStep}>
          Next Step
        </Button>
      ) : (
        <Button
          onClick={handleRegister}
          disabled={!formData.email.length || loading}
        >
          Register
        </Button>
      )}

      <LinkStyled to="/login">Login to your account.</LinkStyled>
    </Container>
  );
};

export default RegisterScreen;

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
  file: "",
};

const RegisterScreen: React.FC = () => {
  const [firstStep, setFirstStep] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<Form>(initialState);
  const navigate = useNavigate();
  const { registerUser } = useContext(AuthContext);

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setFormData((prev) => ({ ...prev, [target.name]: target.value }));
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
          <InputFile
            labelText="Profile Picture"
            setFormData={setFormData}
          />
          <Input
            labelText="Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
        </section>
      )}

      {firstStep ? (
        <Button onClick={() => setFirstStep((prev) => !prev)}>Next Step</Button>
      ) : (
        <Button onClick={handleRegister} disabled={loading}>
          Register
        </Button>
      )}

      <LinkStyled to="/login">Login to your account.</LinkStyled>
    </Container>
  );
};

export default RegisterScreen;

import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { selectCurrentUser } from "../../features/authSlice/authSlice";
import { switchStatus } from "../../features/userStatus/userStatusSlice";
import { AuthContext } from "../../store/context/AuthContext";
import { Container, LinkStyled } from "../../theme/stylesScreens";

type Form = {
  email: string;
  password: string;
};

const initialState: Form = {
  email: "",
  password: "",
};

const LoginScreen: React.FC = () => {
  const [formData, setFormData] = useState<Form>(initialState);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const dispatch = useDispatch()

  const handleClick = async () => {
    try {
      login(formData.email, formData.password).then(() => {
        navigate("/");
      });
    } catch (error) {
      alert("BRUH");
    }
  };

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    dispatch(switchStatus())
    setFormData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  return (
    <Container>
      <h1>My Status</h1>
      <section>
        <Input labelText="Email" onChange={handleChange} name="email" />
        <Input labelText="Password" onChange={handleChange} name="password" />
        <LinkStyled to="/forgot">Forgot your password?</LinkStyled>
      </section>
      <Button onClick={handleClick}>Login</Button>
      <LinkStyled to="/register">Create your account.</LinkStyled>
    </Container>
  );
};

export default LoginScreen;

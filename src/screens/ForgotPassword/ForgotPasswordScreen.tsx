import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { AuthContext } from "../../store/context/AuthContext";
import { Container, LinkStyled } from "../../theme/stylesScreens";

const ForgotPasswordScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate()
  const { forgotPassword } = useContext(AuthContext);

  const handleClick = async () => {
    try {
      forgotPassword(email);
      navigate("/login")
    } catch (error) {
      alert("BRUH");
    }
  };

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setEmail(target.value);
  };

  return (
    <Container>
      <h1>My Status</h1>
      <section>
        <Input labelText="Email" onChange={handleChange} name="email" />
      </section>
      <Button onClick={handleClick}>Send Email</Button>
      <LinkStyled to="/register">Create your account.</LinkStyled>
    </Container>
  );
};

export default ForgotPasswordScreen;

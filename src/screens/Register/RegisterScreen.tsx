import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, LinkStyled } from "../../theme/stylesScreens";

const RegisterScreen: React.FC = () => {
  return (
    <Container>
      <h1>My Status</h1>
      <section>
        <Input labelText="Username" />
        <Input labelText="Password" />
        <Input labelText="Confirm password" />
        <Input labelText="Profile Picture" type="file" />
      </section>
      <Button>Register</Button>
      <LinkStyled to="/login">Login to your account.</LinkStyled>
    </Container>
  );
};

export default RegisterScreen;

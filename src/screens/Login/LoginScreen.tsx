import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, LinkStyled } from "../../theme/stylesScreens";

const LoginScreen: React.FC = () => {
  return (
    <Container>
      <h1>My Status</h1>
      <section>
        <Input labelText="Username" />
        <Input labelText="Password" />
      </section>
      <Button>Login</Button>
      <LinkStyled to="/register">Create your account.</LinkStyled>
    </Container>
  );
};

export default LoginScreen;

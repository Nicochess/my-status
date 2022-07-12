import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container } from "./styles";

const LoginScreen: React.FC = () => {
  return (
    <Container>
      <h1>My Status</h1>
      <section>
        <Input labelText="Username" />
        <Input labelText="Password" />
      </section>
      <Button>Login</Button>
      <a href=".">Create your account.</a>
    </Container>
  );
};

export default LoginScreen;

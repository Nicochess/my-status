import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, LinkStyled } from "../../theme/stylesScreens";

const RegisterScreen: React.FC = () => {
  const [firstStep, setFirstStep] = useState<boolean>(true);
  return (
    <Container>
      <h1>My Status</h1>
      {firstStep ? (
        <section>
          <Input labelText="Username" />
          <Input labelText="Password" />
          <Input labelText="Confirm password" />
        </section>
      ) : (
        <section>
          <Input labelText="Profile Picture" type="file" />
          <Input labelText="Email" />
        </section>
      )}

      <Button onClick={() => setFirstStep((prev) => !prev)}>
        {firstStep ? "Next Step" : "Register"}
      </Button>
      <LinkStyled to="/login">Login to your account.</LinkStyled>
    </Container>
  );
};

export default RegisterScreen;

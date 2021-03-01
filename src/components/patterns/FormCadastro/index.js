import React, { useState } from "react";
import { Button } from "../../commons/Button";
import TextField from "../../forms/TextField";
import { Grid } from "../../foundation/Grid";
import { Box } from "../../foundation/layout/Box";
import { Text } from "../../foundation/Text";

const FormContent = () => {
  const [userInfo, setUserInfo] = useState({
    usuario: "",
    email: "",
  });

  const isFormInvalid =
    userInfo.usuario.length === 0 || userInfo.email.length === 0;

  const handleChange = (event) => {
    const fieldName = event.target.getAttribute("name");
    setUserInfo({ ...userInfo, [fieldName]: event.target.value });
    console.log(event.target.getAttribute("name"), userInfo);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log("At'e aqui t'a ok");
      }}
    >
      <Text variant="title" tag="h1" color="tertiary.main">
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está rolando no bairro, complete
        seu cadastro agora!
      </Text>
      <div>
        <TextField
          type="text"
          placeholder="Email"
          value={userInfo.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          type="text"
          placeholder="Usuário"
          value={userInfo.usuario}
          name="usuario"
          onChange={handleChange}
        />
      </div>

      <Button
        type="submit"
        variant="primary.main"
        disabled={isFormInvalid}
        fullWidth
      >
        Cadastrar
      </Button>
    </form>
  );
};

const FormCadastro = ({ propsDoModal }) => {
  return (
    <Grid.Row marginLeft={0} marginRight={0} flex={1} justifyContent="flex-end">
      <Grid.Col
        display="flex"
        paddingRight={{ md: "0" }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: "16px",
            md: "85px",
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
};

export default FormCadastro;

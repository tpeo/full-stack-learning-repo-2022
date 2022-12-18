import { useEffect, useState, Fragment, useContext } from "react";
import { useForm } from "@mantine/form";
import AuthContext from "../contexts/AuthContext";

import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  createStyles,
  useMantineTheme,
  Group,
  Center,
  Stack,
  Input,
  Button,
  Checkbox,
  TextInput,
  PasswordInput,
  Title
} from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    inputWrapper: {
      width: 250
    }
  };
});

export default function LoginPage() {
  const auth = useContext(AuthContext);
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      email: "",
      password: ""
    },
    validate: {
      // checks to see if the value is in the form of a an email
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email")
    }
  });

  function handleSubmit(values) {
    console.log(form, values);
    auth.login(values, form);
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack align="center" justify="center" p="xl">
        <Title order={1}>Login</Title>
        <TextInput
          classNames={{ wrapper: classes.inputWrapper }}
          required
          label="Email"
          placeholder="tpeorocks@roblox.com"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          classNames={{ wrapper: classes.inputWrapper }}
          placeholder="angularbad"
          label="Password"
          required
          {...form.getInputProps("password")}
        />
        <Group position="center">
          <Button type="submit">Login</Button>
        </Group>
      </Stack>
    </form>
  );
}

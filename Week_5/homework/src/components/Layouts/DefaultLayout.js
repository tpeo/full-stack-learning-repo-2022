import React, { useContext, useState } from "react";
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
  Title,
  Button
} from "@mantine/core";
import { NavLink, Outlet, Navigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

const headerHeight = 80;

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    appShellMain: {
      minHeight: `calc(100vh - ${headerHeight}px)`,
      display: "flex",
      flexDirection: "column",
      marginTop: `${headerHeight}px`
    },
    header: {
      backgroundColor: theme.primaryColor
    },
    headerGroup: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      margin: 0,
      color: theme.primaryColor
    }
  };
});

export default function DefaultLayout() {
  const { classes } = useStyles();
  const auth = useContext(AuthContext);
  const [name, setName] = useState(window.localStorage.getItem("username"));

  const HeaderContent = (
    <Group className={classes.headerGroup} position="apart">
      <Title>{name}'s Todo App</Title>
      <Group>
        <Button variant="light" color="red" onClick={() => auth.logout()}>
          Logout
        </Button>
      </Group>
    </Group>
  );

  return (
    <AppShell
      header={
        <Header className={classes.header} height={headerHeight} p="md" fixed>
          {HeaderContent}
        </Header>
      }
      classNames={{
        main: classes.appShellMain
      }}
    >
      {
        // sends user to login screen whenever the user is logged out
        // based off the tutorial here: https://blog.utsavkumar.tech/private-routes-in-react-router-v6
        auth.loggedIn ? <Outlet></Outlet> : <Navigate to="/login" replace />
      }
    </AppShell>
  );
}

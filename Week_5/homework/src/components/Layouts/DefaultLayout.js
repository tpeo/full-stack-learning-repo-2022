import React, { useContext, useEffect, useState } from "react";
import {
  AppShell,
  Header,
  createStyles,
  Group,
  Title,
  Button
} from "@mantine/core";
import { Outlet, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

const headerHeight = 80;

// create Styles: define classes and their properties in JS object, can be applied within components
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
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const HeaderContent = (
    <Group className={classes.headerGroup} position="apart">
      <Title>{username}'s Todo App</Title>
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
        // If logged in, navigate towards child components, else go to the login page
        
        // In class TODO: implement navigation
        // Added Notes: this is making sure that the user is logged in so that they cannot just adjust the URL and access the content
        auth.loggedIn === true ? (
            <Outlet></Outlet>
          ) ? (
            <Navigate to = "/login" replace/>
          )
      };
    </AppShell>
  );
}
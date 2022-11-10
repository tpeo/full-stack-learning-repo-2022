import { createStyles, AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";

// create Styles: define classes and their properties in JS object, can be applied within components
const useStyles = createStyles((theme, _params, getRef) => {
  return {
    AppShellRoot: {
      minHeight: "100vh",
      height: "100vh"
    },
    AppShellBody: {
      height: "100%"
    },
    AppShellMain: {
      height: "100%",
      padding: 0
    }
  };
});

// Layout will pass in styles to lower components

export default function FullscreenLayout(props) {
  const { classes } = useStyles();

  return (
    <>
      <AppShell
        classNames={{
          root: classes.AppShellRoot,
          body: classes.AppShellBody,
          main: classes.AppShellMain
        }}
      >
        <Outlet></Outlet>
      </AppShell>
    </>
  );
}

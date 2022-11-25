import { useEffect, useState, Fragment } from "react";
import { FaPlus } from "react-icons/fa";

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
  Title
} from "@mantine/core";

export default function HomePage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const user = window.localStorage.getItem("username");
    fetch("http://localhost:4000/todo/" + user, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        //Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiYzEyMyIsImVtYWlsIjoiYWJjMTIzQGdtYWlsLmNvbSJ9.kVAp_XhgpFH3Iyl9cnRGUjRFYiBGuRuyYAztbNcRVLs"
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    })
    .then(resp => resp.json())
    .then(json => setTasks(json))
    .catch((err) => {
        console.log(err);
      });

    //  console.log(window.localStorage.getItem("username"))

  });

  // taskName: a string of the name of task that you want to add; setToDo: a function that allows you to edit the taskName
  const [taskName, setTaskName] = useState("");


  async function addTask() {
    await fetch("http://localhost:4000/todo", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        //Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiYzEyMyIsImVtYWlsIjoiYWJjMTIzQGdtYWlsLmNvbSJ9.kVAp_XhgpFH3Iyl9cnRGUjRFYiBGuRuyYAztbNcRVLs"
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({  todo: taskName, email: window.localStorage.getItem("username") }) // body data type must match "Content-Type" header
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
    .catch((err) => {
        console.log(err);
      });
  }

  async function updateTask(uid){
    await fetch("http://localhost:4000/todo", {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        //Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiYzEyMyIsImVtYWlsIjoiYWJjMTIzQGdtYWlsLmNvbSJ9.kVAp_XhgpFH3Iyl9cnRGUjRFYiBGuRuyYAztbNcRVLs"
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({  uid: uid }) // body data type must match "Content-Type" header
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
    .catch((err) => {
        console.log(err);
      });

  }

  function getSummary() {
    let unfinishedTasks = 0;
    tasks.forEach((task) => {
      if (task.finished === false) {
        unfinishedTasks += 1;
      }
    });
    if (unfinishedTasks === 1) {
      return <Title order={2}>You have 1 unfinished task</Title>;
    } else if (unfinishedTasks >= 1) {
      return (
        <Title order={2}>You have {unfinishedTasks} tasks left to do</Title>
      );
    }
  }

  return (
    <Stack align="center" justify="center" p="xl">
      {getSummary()}
      <Group>
        <Input
          value={taskName}
          placeholder="Type your task here"
          onChange={(event) => setTaskName(event.target.value)}
        ></Input>
        <Button rightIcon={<FaPlus />} onClick={() => addTask()}>
          Add
        </Button>
      </Group>
      <Stack>
        {tasks.map((task, index) => (
          <Checkbox
            checked={task.finished}
            key={task.uid}
            index={index}
            label={task.todo}
            onChange={() => updateTask(task.uid)}
          ></Checkbox>
        ))}
      </Stack>
    </Stack>
  );
}

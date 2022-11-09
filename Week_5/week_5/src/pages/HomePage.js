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
  // toDo: an array of tasks that need to be done; setToDo: a function that allows you to modify the task variable.
  const [tasks, setTasks] = useState([
    { name: "create a todo app", finished: false },
    { name: "wear a mask", finished: false },
    { name: "play roblox", finished: false },
    { name: "be a winner", finished: true },
    { name: "become a tech bro", finished: true }
  ]);

  // taskName: a string of the name of task that you want to add; setToDo: a function that allows you to edit the taskName
  const [taskName, setTaskName] = useState("");


  async function addTask() {
    await fetch("https://tpeo-todo.herokuapp.com/todo", {
        method: 'POST',
        mode: "cors", // no-cors, *cors, same-origin
   //     redirect: "follow",
   //preflight?
        headers: {
            Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiYzEyMyIsImVtYWlsIjoiYWJjMTIzQGdtYWlsLmNvbSJ9.kVAp_XhgpFH3Iyl9cnRGUjRFYiBGuRuyYAztbNcRVLs",
        },
        body: JSON.stringify({ todo: "test task" })
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
    .catch((err) => {
        console.log(err);
      });

  }


  // addTask: adds a task to toDo by adding the taskName
//   function addTask() {
//     // makes sure that taskName is not blank
//     if (taskName) {
//       // makes sure that taskName is a new task
//       tasks.includes(taskName)
//         ? alert("Task already exists")
//         : setTasks(tasks.concat({ name: taskName, completed: false }));
//       setTaskName("");
//     }
//   }

  function updateTask(name) {
    setTasks(
      tasks.map((task) => {
        if (task.name === name) {
          task.finished = !task.finished;
        }
        return task;
      })
    );
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
            key={task.name}
            index={index}
            label={task.name}
            onChange={() => updateTask(task.name)}
          ></Checkbox>
        ))}
      </Stack>
    </Stack>
  );
}

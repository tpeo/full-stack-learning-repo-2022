# Week 6: Introduction to NodeJS and Databases

We have officially transitioned to the backend portion of the full-stack course, which doesn't mean we don't expect you to remember how to do React :). This week, we will go over creating API's in ExpressJS, a popular NodeJS library. We will go over how to structure your backend projects, what middleware is, and how to interact with databases.

Note: if you haven't already, make sure you have NodeJS and npm installed, you can verify by typing `node` and `npm` in your terminal.

# Materials

[Day 11: Introduction to NodeJS and ExpressJS](https://docs.google.com/presentation/d/1eIBCgz-AGq6aTB5CPsv29VNvwu3IIFOv/edit#slide=id.p2)

[Day 12: Databases and Firebase Firestore](https://docs.google.com/presentation/d/1wVD_cvyK_I_VAhSrgEEuoO7_R1h6qfff/edit#slide=id.p2)

# Firebase Tutorial

We will expect you to have a firebase account so you can do your homework this week. To get started with firebase, observe the following steps:

1. Sign up for a firebase account
2. Create a web project and set the options ...
3. Get your credentials by ...

# Demo

We will go over how to connect to Firebase and use cloud firestore to model a Twitter like application, demonstrating how document databases handle one-one, one-many, many-many relationships.

# Homework

For this week's homework, you will be working with firebase and expressJS to build out the TODO application's backend section including routes to:

1. Create a todo object
2. List all todo's for a user
3. Delete/Check off a todo object

You do not have to handle authentication and authorization, we will get there in Week 7, nor hosting, which will be handled in Week 9. You will also need a frontend, which you can take from your Week 5 homework. Host your application on localhost:4000, and your React application on localhost:3000. Make sure they are connected, and don't worry about login/logout routes for now.

PS: if you run into any CORS errors, please run `npm install cors` and follow the instructions on setting up [here](https://www.npmjs.com/package/cors)

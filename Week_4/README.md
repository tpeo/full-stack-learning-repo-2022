# Week 4: React

This week, we continue our progress in frontend web development with React. React is a powerful and relatively lightweight framework used to rapidly build out HTML,CSS, and Javascript user interfaces. Although it is widely used, it often has a steep learning curve which is why we're dedicating the next two weeks to flesh out the topic. Additionally, we will also briefly touch upon NodeJS and its package manager `npm` since its involved when developing React.

# Materials

- [Day 7: Introduction to React](https://docs.google.com/presentation/d/12e041t3X0nvc4WsQKStjsHnWtSadg_8G/edit?usp=sharing&ouid=113681470195127276939&rtpof=true&sd=true)
- [Day 8: React Continued](https://docs.google.com/presentation/d/1cBGTtpdZ2HYXbt3dCnrPh0jjFQidxkpr/edit?usp=sharing&ouid=113681470195127276939&rtpof=true&sd=true)
- [React Textbook: useful to reference and lots of great examples to go over](https://drive.google.com/file/d/1TZXswwWQ4MU9oy2J5tBkWU-TNfmhplqY/view?usp=sharing)

# Debugging Session

https://codesandbox.io/s/react-bugs-ho0ttf?file=/src/App.js

The following are some examples of common mistakes made for the useEffect and useState React hooks. See if you can spot the bugs, why they occur, and any potential solutions :)

# Demo: Setting up React and create-react-app

Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application from the terminal.

It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine - install it from https://nodejs.org/en/ if you don't already have it installed.

Then, run:

```
npx create-react-app my-app
cd my-app
npm start
```

# Homework

For homework this week, we are going to be recreating the weather app from last week, but in React! [Here](https://www.figma.com/file/vKRFWIFsJ5WRJTvMNFXOiZ/Weather-App?node-id=2%3A213) is the figma for reference.

## Some Tips

- use `create-react-app` in order to get started with development
- Separate parts of the web page into smaller, manageable components (such as a Weather Card)
- Be sure to use React hooks learned in lectures
  - useState to manage state, for variables, etc.
  - useEffect to change variables when a desired state changes
- Once the components and functionality of the site are complete, use CSS to style
- Fetch remains relatively unchanged from JS, and you will probably need to set state within the promise

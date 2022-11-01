# Week 7: Authentication and Web Backend Security

We are going to go over some of the more difficult ideas in backend development this week: Authentication, Password Hashing, and CORS.

# Materials

[Day 13 + 14: Authentication and Web Backend Security](https://docs.google.com/presentation/d/11J30rH4DTQFlduhshV_uW-A13YuupG34/edit#slide=id.g173350f31b1_0_96)

# Demos

There are many concepts so were going to go over them in a series of live interactive demos

1. Canvas Authentication: explore how canvas handles its authentication with sessions
2. Writing a Login Endpoint: we're going to use JWT tokens for authentication
3. Passwords: observe how passwords are stored in databases
4. CORS: Cross Origin Resource Sharing, secures your api from being called from unwanted sources

# Homework

Support persistent users for your application including

1. Password Hashing: use pbkdf2 library, “sha256” and 1000 iterations
2. User authentication: use JWT and middleware code
   - Create an endpoint for registering users and add it to your frontend code
   - Hint: copy and paste your /login route code and rename it to /register
3. Authorization of Users: hint, modify middleware with boolean deciding if the user is creator
   - Everyone is allowed to view everyone’s todo list
   - Only creator of todo list is allowed to modify one’s own todo list

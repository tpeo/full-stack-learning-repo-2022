/** Module for handling users */
const express = require("express");
const cors = require("cors");

// Define route and middlewares
const users = express.Router();
users.use(cors());
users.use(express.json());
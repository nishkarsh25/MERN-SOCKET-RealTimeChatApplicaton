import express from "express";
import { getOtherUsers, login, logout, register } from "../controllers/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();




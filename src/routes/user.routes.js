
import express from "express";
import {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
} from "../controller/user.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import {createUserDTO, updateUserDTO} from "../dto/user.dto.js";

const router = express.Router(); 

router.get("/", getUsers);
router.post(
    "/", 
    validate(createUserDTO),
    createUser,
);

router.patch("/:id", validate(updateUserDTO), updateUser);
router.delete("/:id", deleteUser);

export default router;


//the file define all the api routes related to the users 
// it's mean perpose with connect to controller with http routes

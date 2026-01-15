import { Router } from "express";

import authorize from "../middlewares/auth.middleware.js";
import { getUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, getUser);

userRouter.post('/',(res , req) => res.send({title:'Create a new user'}));

userRouter.put('/:id',(res , req) => res.send({title:'Update a user by ID'}));

userRouter.delete('/:id',(res , req) => res.send({title:'Delete a user by ID'}));

export default userRouter;
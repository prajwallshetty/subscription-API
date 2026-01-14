import { Router } from "express";

const userRouter = Router();

userRouter.get('/',(res , req) => res.send({title:'Get all users'}));

userRouter.get('/:id',(res , req) => res.send({title:'Get user by ID'}));

userRouter.post('/',(res , req) => res.send({title:'Create a new user'}));

userRouter.put('/:id',(res , req) => res.send({title:'Update a user by ID'}));

userRouter.delete('/:id',(res , req) => res.send({title:'Delete a user by ID'}));

export default userRouter;
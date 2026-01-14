import { Router } from "express";

const authRouter = Router();

authRouter.post('/sign-up', (req , res) => res.send({ title: 'sign UP' }));
authRouter.post('/sign-in', (req , res) => res.send({ title: 'sign IN' }));
authRouter.post('/sign-out', (req , res) => res.send({ title: 'sign OUT' }));

export default authRouter;
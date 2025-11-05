import { Router } from 'express';

import testRouter from './testRouter.js';
import userRouter from './userRouter.js';
import attendaceRouter from './attendaceRouter.js';

const v1 = new Router();

v1.use("/test", testRouter);
v1.use("/attendance", attendaceRouter);
v1.use("/user", userRouter);

export default v1;
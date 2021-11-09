import { Router } from 'express';
import userRouter from '@api/routes/v1/user'
import swimmerRouter from '@api/routes/v1/swimmer'
import loginRouter from '@api/routes/v1/login'

import middlewares from '@api/middlewares'

const router = Router();

router.use("/login", loginRouter);
router.use("/user", middlewares.auth, userRouter);
router.use("/swimmer", middlewares.auth, swimmerRouter);

export default router
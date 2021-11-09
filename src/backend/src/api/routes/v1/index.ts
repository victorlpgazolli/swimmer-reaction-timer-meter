import { Router } from 'express';
import userRouter from '@api/routes/v1/user'
import loginRouter from '@api/routes/v1/login'
import swimmerRouter from '@api/routes/v1/swimmer'
import trainingRouter from '@api/routes/v1/training'

import middlewares from '@api/middlewares'

const router = Router();

router.use("/login", loginRouter);
router.use("/user", middlewares.auth, userRouter);
router.use("/swimmer", swimmerRouter);
router.use("/training", trainingRouter);

export default router
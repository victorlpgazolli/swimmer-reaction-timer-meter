import { Router } from 'express';
import coachRouter from '@api/routes/v1/coach'
import loginRouter from '@api/routes/v1/login'
import swimmerRouter from '@api/routes/v1/swimmer'
import trainingRouter from '@api/routes/v1/training'

import middlewares from '@api/middlewares'

import swaggerUi from 'swagger-ui-express'
import swaggerDoc from '@api/routes/v1/swagger.json'

const router = Router();


router.use("/login", loginRouter);
router.use("/coach", middlewares.auth, coachRouter);
router.use("/swimmer", swimmerRouter);
router.use("/training", trainingRouter);
router.use('/docs/', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

export default router
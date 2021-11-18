import { Router } from 'express';
import coachRouter from '@api/routes/v1/coach'
import swimmerRouter from '@api/routes/v1/swimmer'

import swaggerUi from 'swagger-ui-express'
import swaggerDoc from '@api/routes/v1/swagger.json'

const router = Router();


router.use("/coach", coachRouter);
router.use("/swimmer", swimmerRouter);
router.use('/docs/', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

export default router
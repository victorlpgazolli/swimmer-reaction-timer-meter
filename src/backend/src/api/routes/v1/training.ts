import controller from '@api/modules/training/controller';
import { Router } from 'express';


const router = Router();

router.get("/", controller.createNewTraining)

export default router

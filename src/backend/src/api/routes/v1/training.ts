import controllers from '@controllers';
import { Router } from 'express';


const router = Router();

router.get("/", controllers.training.getTrainingData)
router.post("/", controllers.training.createNewTraining)
router.patch("/", controllers.training.updateTraining)

export default router
import controller from '@api/modules/training/controller';

import { Router } from 'express';


const router = Router();

router.post("/:swimmerId", controller.createNewTrainingForSwimmer)
router.get("/:swimmerId", controller.getTrainingBySwimmer)

export default router
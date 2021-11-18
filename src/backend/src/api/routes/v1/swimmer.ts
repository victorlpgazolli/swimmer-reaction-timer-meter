import controller from '@api/modules/swimmer/controller';
import { Router } from 'express';


const router = Router();

router.get("/", controller.getSwimmers)
router.patch("/:swimmerId", controller.patchSwimmer)
router.delete("/:swimmerId", controller.deleteSwimmer)
router.get("/:swimmerId/trainings", controller.getTrainingFromSwimmer)
router.post("/:swimmerId/trainings", controller.createTrainingForSwimmer)

export default router
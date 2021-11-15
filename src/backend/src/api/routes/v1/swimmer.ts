import controller from '@api/modules/swimmer/controller';
import { Router } from 'express';


const router = Router();

router.get("/:coachId", controller.listSwimmersByCoachId)
router.patch("/:swimmerId", controller.patchSwimmer)
router.delete("/:swimmerId", controller.deleteSwimmer)
router.post("/:coachId", controller.createNewSwimmer)

export default router
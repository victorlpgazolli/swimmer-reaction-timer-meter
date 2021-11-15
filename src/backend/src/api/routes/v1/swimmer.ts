import controller from '@api/modules/swimmer/controller';
import { Router } from 'express';


const router = Router();

router.get("/:coachId", controller.listSwimmersByCoachId)
router.patch("/:coachId/:swimmerId", controller.patchSwimmer)
router.delete("/:coachId/:swimmerId", controller.deleteSwimmerByCoachId)
router.post("/:coachId", controller.createNewSwimmer)

export default router
import controller from '@api/modules/coach/controller';
import { Router } from 'express';


const router = Router();

router.get("/:coachId", controller.getCoachData)
router.delete("/:coachId", controller.deleteCoach)
router.patch("/:coachId", controller.patchCoach)

export default router
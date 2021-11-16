import controller from '@api/modules/coach/controller';
import { Router } from 'express';


const router = Router();

router.get("/:coachId", controller.getCoachData)
router.delete("/:coachId", controller.deleteCoach)
router.patch("/:coachId", controller.patchCoach)
router.get("/:coachId/swimmers", controller.getSwimmersFromCoach)
router.post("/:coachId/swimmers", controller.createSwimmersForCoach)

export default router
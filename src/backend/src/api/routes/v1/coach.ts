import controller from '@api/modules/coach/controller';
import { Router } from 'express';


const router = Router();

router.get("/", controller.getCoachs)
router.post("/", controller.createCoach)
router.get("/:coachId", controller.getCoachById)
router.delete("/:coachId", controller.deleteCoach)
router.patch("/:coachId", controller.patchCoach)
router.get("/:coachId/swimmers", controller.findSwimmerByCoachId)
router.post("/:coachId/swimmers", controller.createSwimmersForCoach)

export default router
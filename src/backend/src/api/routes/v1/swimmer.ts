import controllers from '@controllers';
import { Router } from 'express';


const router = Router();

router.get("/", controllers.swimmer.getSwimmerData)
router.post("/", controllers.swimmer.createNewSwimmer)
router.patch("/", controllers.swimmer.updateSwimmer)

export default router
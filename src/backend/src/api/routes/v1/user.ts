import controllers from '@controllers';
import { Router } from 'express';


const router = Router();

router.use("/", controllers.user.getUserData)

export default router
import controller from '@api/modules/coach/controller';
import { Router } from 'express';


const router = Router();

router.post("/", controller.loginUser)


export default router
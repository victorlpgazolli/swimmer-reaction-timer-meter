import controllers from '@controllers';
import { Router } from 'express';


const router = Router();

router.post("/", controllers.auth.loginUser)


export default router
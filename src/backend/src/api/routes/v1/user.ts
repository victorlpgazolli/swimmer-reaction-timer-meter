import { Router } from 'express';


const router = Router();

router.use("/", (req, res) => {
    res.send('teste');
})

export default router
import { Router } from 'express';
import exampleRoute from './example';

const router = Router();

router.use('/example', exampleRoute);

export default router;

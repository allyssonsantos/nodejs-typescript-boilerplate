import { Response, Request, Router } from 'express';
import { ExampleController } from '../components';

const router: Router = Router();

const exampleController: ExampleController = new ExampleController();
router.get('/', (req: Request, res: Response): Response => exampleController.get(req, res));

export default router;

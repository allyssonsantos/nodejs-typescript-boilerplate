import { Request, Response } from 'express';
import Example from './exampleService';

class ExampleController {
  public get(_: Request, res: Response): Response {
    const example: Example = new Example();
    return res.status(200).json({ message: example.hello() })
  }
}

export default ExampleController;

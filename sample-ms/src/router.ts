import { Request, Response, Router } from "express";
import { container } from "tsyringe";
import { SampleNodeJsController } from "./controllers/sample-nodejs-controller";

const router = Router();

const sampleNodeJsController = container.resolve(SampleNodeJsController);

router
    .get('/status', async (request: Request, response: Response) => {
        response.send({ status: 'Running', timestamp: new Date()});
    })

    .get('/:id', async (request: Request, response: Response) => {
        sampleNodeJsController.get(request, response);
    })

    .get('/', async (request: Request, response: Response) => {
        sampleNodeJsController.getAll(request, response);
    })

    .post('/', async (request: Request, response: Response) => {
        sampleNodeJsController.create(request, response);
    })

    .post('/available', async (request: Request, response: Response) => {
        sampleNodeJsController.available(request, response);
    })

    .post('/register', async (request: Request, response: Response) => {
        sampleNodeJsController.register(request, response);
    });

export default router;
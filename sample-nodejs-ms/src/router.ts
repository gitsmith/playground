import { Request, Response, Router } from "express";
import { SampleNodeJsController } from "./controllers/sample-nodejs-controller";
import { IdentityProviderService } from "./identity-provider/services/identity-provider-service";
import { SampleNodeJsService } from "./services/sample-nodejs-service";

const router = Router();

const sampleNodeJsController = new SampleNodeJsController(new SampleNodeJsService(new IdentityProviderService()));

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
    });

export default router;
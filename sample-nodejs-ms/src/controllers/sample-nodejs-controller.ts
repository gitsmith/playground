import { Request, Response } from "express";
import { SampleNodeJsService } from "../services/sample-nodejs-service";

export class SampleNodeJsController {
    constructor(private sampleNodeJsService: SampleNodeJsService) {
    }

    async get(request: Request, response: Response) {
        const result = await this.sampleNodeJsService.get(Number(request.params.id));

        if(result.ok) {
            return response.status(200).json(result.value);
        }

        return response.status(500);
    }

    async getAll(request: Request, response: Response) {
        const result = await this.sampleNodeJsService.getAll();

        if(result.ok) {
            return response.status(200).json(result.value);
        }

        return response.status(500);
    }

    async create(request: Request, response: Response) {
        return response.status(200).json(true);
    }

    async available(request: Request, response: Response) {
        const result = await this.sampleNodeJsService.available(request.body.email);

        if(result.ok) {
            return response.status(200).json(result.value);
        }

        return response.status(500);
    }
}
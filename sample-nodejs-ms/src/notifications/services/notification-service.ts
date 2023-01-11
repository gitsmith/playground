import { autoInjectable } from "tsyringe";
import { ApiError } from "../../models/api-error";
import { OkResult, Result } from "../../models/result";

@autoInjectable()
export class NotificationService {
    constructor() {
    }
    
    async sendConfirmation(email: string): Promise<Result<boolean, ApiError>> {
        return OkResult(!!email);
    }
}
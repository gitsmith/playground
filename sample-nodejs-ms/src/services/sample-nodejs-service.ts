import { IdentityProviderService } from "../identity-provider/services/identity-provider-service";
import { Profile } from "../identity-provider/models/profile";
import { AccountAvailabilityResponse } from "../models/account-availability-response";
import { ApiError } from "../models/api-error";
import { ErrorResult, OkResult, Result } from "../models/result";

export class SampleNodeJsService {
    constructor(private identityProvider: IdentityProviderService) {
    }

    async get(profileId: number): Promise<Result<Profile | undefined, ApiError>> {
        return this.identityProvider.getProfile(profileId);
    }

    async getAll(): Promise<Result<Profile[], ApiError>> {
        return this.identityProvider.getProfiles();
    }

    async available(email: string): Promise<Result<AccountAvailabilityResponse, ApiError>> {
        const result = await this.identityProvider.available(email);

        if(result.ok) {
            return OkResult({
                isAvailable: result.value
            });
        }

        return ErrorResult(result.error);
    }
}
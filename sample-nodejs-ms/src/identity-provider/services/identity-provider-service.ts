import { autoInjectable } from "tsyringe";
import { ApiError } from "../../models/api-error";
import { OkResult, Result } from "../../models/result";
import { Profile } from "../models/profile";

@autoInjectable()
export class IdentityProviderService {
    private profiles: Profile[] = [];

    constructor() {
        this.createProfile('Auston', 'Matthews');
        this.createProfile('Mitch', 'Marner');
        this.createProfile('William', 'Nylander');
        this.createProfile('John', 'Tavares');
        this.createProfile('Connor', 'McDavid');
        this.createProfile('Leon', 'Draisaitl');
    }

    async available(email: string): Promise<Result<boolean, ApiError>> {
        return OkResult(!this.profiles?.some(x => x.email === email));
    }

    async getProfile(id: number): Promise<Result<Profile | undefined, ApiError>> {
        return OkResult(this.profiles!.find(x => x.id === id));
    }

    async getProfiles(): Promise<Result<Profile[], ApiError>> {
        return OkResult(this.profiles!);
    }

    async register(firstName: string, lastName: string, email: string): Promise<Result<boolean, ApiError>> {
        this.createProfile(firstName, lastName, email);
        return OkResult(true);
    }

    private createProfile(firstName: string, lastName: string, email?: string): void {
        const profile = {
            id: (this.profiles?.length ?? 0) + 1,
            firstName: firstName,
            lastName: lastName,
            email: email ?? `${firstName}.${lastName}@domain.com`.toLowerCase()
        };

        this.profiles.push(profile);
    }
}
import { ApiError } from "../../models/api-error";
import { OkResult, Result } from "../../models/result";
import { Profile } from "../models/profile";

export class IdentityProviderService {
    constructor()
    constructor(private profiles?: Profile[]) {
        console.log('IdentityProviderService');
        if(!this.profiles) {
            this.profiles = [];
            this.profiles.push(this.createProfile('Auston', 'Matthews'));
            this.profiles.push(this.createProfile('Mitch', 'Marner'));
            this.profiles.push(this.createProfile('William', 'Nylander'));
            this.profiles.push(this.createProfile('John', 'Tavares'));
            this.profiles.push(this.createProfile('Connor', 'McDavid'));
            this.profiles.push(this.createProfile('Leon', 'Draisaitl'));
        }
    }

    async available(email: string): Promise<Result<boolean, ApiError>> {
        return OkResult(this.profiles?.some(x => x.email === email) ?? false);
    }

    async getProfile(id: number): Promise<Result<Profile | undefined, ApiError>> {
        return OkResult(this.profiles!.find(x => x.id === id));
    }

    async getProfiles(): Promise<Result<Profile[], ApiError>> {
        return OkResult(this.profiles!);
    }

    private createProfile(firstName: string, lastName: string): Profile {
        return {
            id: (this.profiles?.length ?? 0) + 1,
            firstName: firstName,
            lastName: lastName,
            email: `${firstName}.${lastName}@domain.com`.toLowerCase()
        }
    }
}
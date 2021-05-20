import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {

    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: "-----BEGIN CERTIFICATE-----\nMIIDHDCCAgSgAwIBAgIIbt4McHrn9f0wDQYJKoZIhvcNAQEFBQAwMTEvMC0GA1UE\nAxMmc2VjdXJldG9rZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wHhcNMjEw\nNTE2MDkyMDIwWhcNMjEwNjAxMjEzNTIwWjAxMS8wLQYDVQQDEyZzZWN1cmV0b2tl\nbi5zeXN0ZW0uZ3NlcnZpY2VhY2NvdW50LmNvbTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBANnmbU5+gT1KTIM83+x9b1Rwh50lBk15Uhmbmww3dCBunSON\nGJjJGF/Ey0J2bmcTNH5t6aEYa/nGubCpkIvlgOdONuzlkIfWNntHcrZ1ww/JOliO\nCjlX13Eu4dMlcDyXKFVbIyVdDBTpy+1p52Dg1pXOT4na2wQkELOjqzBUQGrTbr0t\ndt1ZiBsDNlAkh6KlwpCfzQCfUYQytJ1QFEKXTRAXvspVLWt5CIdXyT6f4Girii0e\nf6V/E9QmVXi4ldyQpMH3BDP8dgrJE22unuIPOttXPZ0PL0hDwVAmBkLz+sXk5YV5\nnOIWN8A1mUT/p6AoQiR9rZ0Z1WeyNYd86BHAltMCAwEAAaM4MDYwDAYDVR0TAQH/\nBAIwADAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ\nKoZIhvcNAQEFBQADggEBAFPTcoGNo5HvC+oFfyNQXvok3N8FcuXEiXyP4SOyMfw/\ncIIPgBrDcgRDiDxlRd66gI6xAGWD+xJ0IEqXaj+pdGtGDdxlS6ooMzzuOdCGH+ou\n9m5cd6W/JS17UMtxYKnS1SaKzarDb3gbqzto3WUhvYJCLrdoKr1bwbW/jfQLIja1\nqGyuJET+ezqB/XOSm+PtXqtzKsOuV5KFTkz4KQsjV1ACi/l+qHHtcIo0vBn2z0Zs\n2i+7Act0Wdbp2EJLTLSZnoTdvXbf/TF3rmn/PlluE4tU3xQ2EkWUTVEdS1JvkMBY\nWJ8wpjJsgjYaSQ8m1MLdfP4wwQgU0DGfwLn49ImT2AA=\n-----END CERTIFICATE-----\n"
        });
    }

    async validate(payload) {
        console.log(payload);
        const user = {
            user_id: payload.user_id,
            email: payload.email
        }
        return user;
    }
}
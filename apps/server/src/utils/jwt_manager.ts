import { JwtPayload, SignOptions, VerifyOptions } from "jsonwebtoken";
import jwt from "jsonwebtoken"

export class JWTManager {
    private secret: string;
    constructor(secretKey: string) {
        this.secret = secretKey
    }

    generateEncryptedJWTTokens = ({ dataObject, secret, args }: { dataObject: JwtPayload, secret?: string, args?: SignOptions }) => {
        return jwt.sign(dataObject, secret ?? this.secret as string, {
            ...args,
        });
    };

    getDecryptedJWTValue = ({ token, secret, options }: { token: string, secret?: string, options?: VerifyOptions }) => {
        return jwt.verify(token, secret ?? this.secret, options)
    }


}
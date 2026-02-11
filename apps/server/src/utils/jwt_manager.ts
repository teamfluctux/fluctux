import type { JwtPayload, SignOptions, VerifyOptions } from "jsonwebtoken";
import jwt from "jsonwebtoken";

type JWTPayloadDataType = JwtPayload & {
  deviceId?: string;
  provider?: string;
  refreshToken?: string;
  idToken?: string;
};

class JWTManager {
  private secret: string;
  constructor(secretKey?: string) {
    this.secret = secretKey ?? "";
  }

  generateEncryptedJWTTokens = ({ 
    dataObject,
    secret,
    args,
  }: {
    dataObject: JWTPayloadDataType;
    secret?: string;
    args?: SignOptions;
  }) => {
    return jwt.sign(dataObject, secret ?? (this.secret as string), {
      ...args,
    });
  };

  getDecryptedJWTValue = ({
    token,
    secret,
    options,
  }: {
    token: string;
    secret?: string;
    options?: VerifyOptions;
  }): JWTPayloadDataType => {
    return jwt.verify(
      token,
      secret ?? this.secret,
      options
    ) as JWTPayloadDataType;
  };
}

export const jwtManager = new JWTManager();

import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateEncryptedJWTTokens = (
  dataObject: JwtPayload,
  args?: SignOptions
) => {
  return jwt.sign(dataObject, process.env.JWT_SECRET as string, {
    ...args,
  });
};

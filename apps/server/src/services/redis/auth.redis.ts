import { JWTManager } from "@/utils/jwt_manager";
import { RedisService } from "./redis.conf";

export class AuthRedis extends RedisService {
    async addAuthTokens({
        refreshToken,
        providerToken,
        deviceIdToken
    }: {
        refreshToken: string
        providerToken: string
        deviceIdToken: string
    }) {
        try {
            await this.connect()
            const jwt = new JWTManager()
            const decryptedDeviceID = jwt.getDecryptedJWTValue({
                token: deviceIdToken,
                secret: `${process.env.DEVICE_TOKEN_SECRET}`
            })

            if(!decryptedDeviceID) {
                return null
            }

            const response = await this.redisClient.hSet(`${decryptedDeviceID?.deviceId}`, {
                refreshToken,
                providerToken,
                deviceIdToken
            })

            const responsehexpire = await this.redisClient.hpExpire(`${decryptedDeviceID}`, [
                providerToken, providerToken, deviceIdToken
            ], 3000)

            console.log("expire", responsehexpire)

            await this.quit()
            return response
        } catch (error) {
            return null
        }
    }
}
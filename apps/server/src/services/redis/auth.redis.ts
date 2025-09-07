import { JWTManager } from "@/utils/jwt_manager";
import { RedisService } from "./redis.conf";

export class AuthRedis extends RedisService {

    async addOrUpdateAuthTokens({
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

            if (!decryptedDeviceID.deviceId) {
                return null
            }

            const response = await this.redisClient.hSet(`${decryptedDeviceID?.deviceId}`, {
                refreshToken,
                providerToken,
                deviceIdToken,
            })

            /**
             * record device id to database after login
             * after log outs remove the deivce id from database
             */
            const responsehexpire = await this.redisClient.hExpire(`${decryptedDeviceID?.deviceId}`, ['refreshToken', 'providerToken', 'deviceIdToken'],60 )
            console.log("expire", responsehexpire)
            await this.quit()
            return response

        } catch (error) {
            return null
        }
    }
}
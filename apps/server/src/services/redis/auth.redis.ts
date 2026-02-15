import { jwtManager } from "@/utils/jwt_manager";
import { RedisService } from "./redis.service";

class AuthRedisService extends RedisService {
  async addOrUpdateAuthTokens({
    refreshToken,
    providerToken,
    deviceIdToken,
  }: {
    refreshToken: string;
    providerToken: string;
    deviceIdToken: string;
  }) {
    try {
      await this.connectRedis();

      const decryptedDeviceID = jwtManager.getDecryptedJWTValue({
        token: deviceIdToken,
        secret: `${process.env.DEVICE_TOKEN_SECRET}`,
      });

      if (!decryptedDeviceID.deviceId) {
        return null;
      }

      const response = await this.redisClient.hSet(
        `${decryptedDeviceID?.deviceId}`,
        {
          refreshToken,
          providerToken,
          deviceIdToken,
        }
      );

      // MSG_ERROR: ttl is showing -1 always fix it
      // const getRemainingTtlOfRefreshToken = await this.redisClient.hTTL(`${decryptedDeviceID?.deviceId}`, ["refreshToken"])
      // let ttl = getRemainingTtlOfRefreshToken?.[0] ?? 60;

      // // If Redis reports no TTL (-1) or key not found (-2), force fallback
      // if (!ttl || ttl < 0) {
      //   ttl = 60;
      // }
      // console.log("Remaining Redis ttl refreshToken is ", getRemainingTtlOfRefreshToken?.[0], ttl)
      /**
       * record device id to database after login
       * after log outs remove the deivce id from database
       */
      // const responsehexpireAuthTokens = await this.redisClient.hExpire(
      //   `${decryptedDeviceID?.deviceId}`,
      //   ["refreshToken", "providerToken", "deviceIdToken"],
      //   60
      // );

      return response;
    } catch (error) {
      return null;
    } finally {
      await this.quitRedis();
    }
  }

  async removeAuthTokens(deviceID: string): Promise<{} | null> {
    try {
      await this.connectRedis();
      const response = await this.redisClient.hExpire(
        deviceID,
        ["refreshToken", "providerToken", "deviceIdToken"],
        0
      );
      return response;
    } catch (error) {
      return null;
    } finally {
      await this.quitRedis();
    }
  }
}

export const authRedisService = new AuthRedisService();

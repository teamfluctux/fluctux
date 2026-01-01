
type BaseConfigType = {
  port: number;
  nodeEnv: string;
  isProduction: boolean
}

export const BaseConfig: BaseConfigType = {
  port: Number(process.env.PORT) || 5000,
  nodeEnv: process.env.NODE_ENV || "development",
  isProduction: process.env.NODE_ENV === "production",
};

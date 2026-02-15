// =================== User Constants ===========================
export const USER_ACCOUNT_PROVIDER_VALUES = [
    "GOOGLE",
    "GITHUB",
    "DISCORD",
    "MANUAL",
] as const;
export const USER_ACCOUNT_STATUS_VALUES = [ 
    "NORMAL",
    "SUSPENDED",
    "RESTRICTED",
] as const;


// =================== Organization Constants ===========================
export const ORG_VISIBILITY_VALUES = ["PUBLIC", "PRIVATE", "CONNECTIONS", "CUSTOM"] as const
export const ORG_STATUS_VALUES = ["NORMAL",
    "SUSPENDED",
    "RESTRICTED",] as const
export const ORG_TEAM_VISILITY_VALUES = ["PUBLIC", "PRIVATE"] as const
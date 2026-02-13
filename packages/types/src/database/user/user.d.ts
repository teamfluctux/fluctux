import { USER_ACCOUNT_PROVIDER_VALUES, USER_ACCOUNT_STATUS_VALUES } from "@fluctux/constants"

export type AccountProviderType = (typeof USER_ACCOUNT_PROVIDER_VALUES)[number];    
export type AccountStatusType = (typeof USER_ACCOUNT_STATUS_VALUES)[number] 
export enum CustomErrorEnums {
  "UNAUTHORIZED_USER" = "UNAUTHORIZED_USER",
  "USER_NOT_FOUND" = "USER_NOT_FOUND",
  "INVALID_REQUEST" = "INVALID_REQUEST",
  "INVALID_TOKEN" = "INVALID_TOKEN",
}

export enum HttpErrorEnums {
  "BAD_REQUEST" = "BAD_REQUEST",
  "UNAUTHORIZED" = "UNAUTHORIZED",
  "PAYMENT_REQUIRED" = "PAYMENT_REQUIRED",
  "FORBIDDEN" = "FORBIDDEN",
  "NOT_FOUND" = "NOT_FOUND",
  "METHOD_NOT_ALLOWED" = "METHOD_NOT_ALLOWED",
  "NOT_ACCEPTABLE" = "NOT_ACCEPTABLE",
  "PROXY_AUTHENTICATION_REQUIRED" = "PROXY_AUTHENTICATION_REQUIRED",
  "REQUEST_TIMEOUT" = "REQUEST_TIMEOUT",
  "CONFLICT" = "CONFLICT",
  "GONE" = "GONE",
  "LENGTH_REQUIRED" = "LENGTH_REQUIRED",
  "PRECONDITION_FAILED" = "PRECONDITION_FAILED",
  "PAYLOAD_TOO_LARGE" = "PAYLOAD_TOO_LARGE",
  "URI_TOO_LONG" = "URI_TOO_LONG",
  "UNSUPPORTED_MEDIA_TYPE" = "UNSUPPORTED_MEDIA_TYPE",
  "RANGE_NOT_SATISFIABLE" = "RANGE_NOT_SATISFIABLE",
  "EXPECTATION_FAILED" = "EXPECTATION_FAILED",
  "IM_A_TEAPOT" = "IM_A_TEAPOT",
  "MISDIRECTED_REQUEST" = "MISDIRECTED_REQUEST",
  "UNPROCESSABLE_ENTITY" = "UNPROCESSABLE_ENTITY",
  "LOCKED" = "LOCKED",
  "FAILED_DEPENDENCY" = "FAILED_DEPENDENCY",
  "TOO_EARLY" = "TOO_EARLY",
  "UPGRADE_REQUIRED" = "UPGRADE_REQUIRED",
  "PRECONDITION_REQUIRED" = "PRECONDITION_REQUIRED",
  "TOO_MANY_REQUESTS" = "TOO_MANY_REQUESTS",
  "REQUEST_HEADER_FIELDS_TOO_LARGE" = "REQUEST_HEADER_FIELDS_TOO_LARGE",
  "UNAVAILABLE_FOR_LEGAL_REASONS" = "UNAVAILABLE_FOR_LEGAL_REASONS",
  "INTERNAL_SERVER_ERROR" = "INTERNAL_SERVER_ERROR",
  "NOT_IMPLEMENTED" = "NOT_IMPLEMENTED",
  "BAD_GATEWAY" = "BAD_GATEWAY",
  "SERVICE_UNAVAILABLE" = "SERVICE_UNAVAILABLE",
  "GATEWAY_TIMEOUT" = "GATEWAY_TIMEOUT",
  "HTTP_VERSION_NOT_SUPPORTED" = "HTTP_VERSION_NOT_SUPPORTED",
  "VARIANT_ALSO_NEGOTIATES" = "VARIANT_ALSO_NEGOTIATES",
  "INSUFFICIENT_STORAGE" = "INSUFFICIENT_STORAGE",
  "LOOP_DETECTED" = "LOOP_DETECTED",
  "NOT_EXTENDED" = "NOT_EXTENDED",
  "NETWORK_AUTHENTICATION_REQUIRED" = "NETWORK_AUTHENTICATION_REQUIRED",
}

export const HTTPErrorCodes: Record<HttpErrorEnums, number> = {
  [HttpErrorEnums.BAD_REQUEST]: 400,
  [HttpErrorEnums.UNAUTHORIZED]: 401,
  [HttpErrorEnums.PAYMENT_REQUIRED]: 402,
  [HttpErrorEnums.FORBIDDEN]: 403,
  [HttpErrorEnums.NOT_FOUND]: 404,
  [HttpErrorEnums.METHOD_NOT_ALLOWED]: 405,
  [HttpErrorEnums.NOT_ACCEPTABLE]: 406,
  [HttpErrorEnums.PROXY_AUTHENTICATION_REQUIRED]: 407,
  [HttpErrorEnums.REQUEST_TIMEOUT]: 408,
  [HttpErrorEnums.CONFLICT]: 409,
  [HttpErrorEnums.GONE]: 410,
  [HttpErrorEnums.LENGTH_REQUIRED]: 411,
  [HttpErrorEnums.PRECONDITION_FAILED]: 412,
  [HttpErrorEnums.PAYLOAD_TOO_LARGE]: 413,
  [HttpErrorEnums.URI_TOO_LONG]: 414,
  [HttpErrorEnums.UNSUPPORTED_MEDIA_TYPE]: 415,
  [HttpErrorEnums.RANGE_NOT_SATISFIABLE]: 416,
  [HttpErrorEnums.EXPECTATION_FAILED]: 417,
  [HttpErrorEnums.IM_A_TEAPOT]: 418,
  [HttpErrorEnums.MISDIRECTED_REQUEST]: 421,
  [HttpErrorEnums.UNPROCESSABLE_ENTITY]: 422,
  [HttpErrorEnums.LOCKED]: 423,
  [HttpErrorEnums.FAILED_DEPENDENCY]: 424,
  [HttpErrorEnums.TOO_EARLY]: 425,
  [HttpErrorEnums.UPGRADE_REQUIRED]: 426,
  [HttpErrorEnums.PRECONDITION_REQUIRED]: 428,
  [HttpErrorEnums.TOO_MANY_REQUESTS]: 429,
  [HttpErrorEnums.REQUEST_HEADER_FIELDS_TOO_LARGE]: 431,
  [HttpErrorEnums.UNAVAILABLE_FOR_LEGAL_REASONS]: 451,
  [HttpErrorEnums.INTERNAL_SERVER_ERROR]: 500,
  [HttpErrorEnums.NOT_IMPLEMENTED]: 501,
  [HttpErrorEnums.BAD_GATEWAY]: 502,
  [HttpErrorEnums.SERVICE_UNAVAILABLE]: 503,
  [HttpErrorEnums.GATEWAY_TIMEOUT]: 504,
  [HttpErrorEnums.HTTP_VERSION_NOT_SUPPORTED]: 505,
  [HttpErrorEnums.VARIANT_ALSO_NEGOTIATES]: 506,
  [HttpErrorEnums.INSUFFICIENT_STORAGE]: 507,
  [HttpErrorEnums.LOOP_DETECTED]: 508,
  [HttpErrorEnums.NOT_EXTENDED]: 510,
  [HttpErrorEnums.NETWORK_AUTHENTICATION_REQUIRED]: 511,
};

// Custom error codes (X0000)
export const CustomHTTPErrorCodes: Record<CustomErrorEnums, number> = {
  [CustomErrorEnums.USER_NOT_FOUND]: 1000,
  [CustomErrorEnums.UNAUTHORIZED_USER]: 1001,
  [CustomErrorEnums.INVALID_REQUEST]: 1002,
  [CustomErrorEnums.INVALID_TOKEN]: 1003,
};

export const ERROR: {
  [key in CustomErrorEnums | HttpErrorEnums]: {
    title: string;
    message: string;
    status: number;
    code?: number;
  };
} = {
  [HttpErrorEnums.BAD_REQUEST]: {
    title: "Bad Request",
    message: "The request cannot be processed due to client error.",
    status: HTTPErrorCodes.BAD_REQUEST,
  },
  [HttpErrorEnums.UNAUTHORIZED]: {
    title: "Unauthorized",
    message:
      "You are not authorized to access this resource. Please log in or check your permissions.",
    status: HTTPErrorCodes.UNAUTHORIZED,
  },
  [HttpErrorEnums.PAYMENT_REQUIRED]: {
    title: "Payment Required",
    message: "Payment is required to access this resource.",
    status: HTTPErrorCodes.PAYMENT_REQUIRED,
  },
  [HttpErrorEnums.FORBIDDEN]: {
    title: "Forbidden",
    message: "You do not have permission to access this resource.",
    status: HTTPErrorCodes.FORBIDDEN,
  },
  [HttpErrorEnums.NOT_FOUND]: {
    title: "Not Found",
    message: "The requested resource could not be found.",
    status: HTTPErrorCodes.NOT_FOUND,
  },
  [HttpErrorEnums.METHOD_NOT_ALLOWED]: {
    title: "Method Not Allowed",
    message: "The HTTP method used is not allowed for this resource.",
    status: HTTPErrorCodes.METHOD_NOT_ALLOWED,
  },
  [HttpErrorEnums.NOT_ACCEPTABLE]: {
    title: "Not Acceptable",
    message: "The request made is not acceptable.",
    status: HTTPErrorCodes.NOT_ACCEPTABLE,
  },
  [HttpErrorEnums.PROXY_AUTHENTICATION_REQUIRED]: {
    title: "Proxy Authentication Required",
    message: "Proxy authentication is required to access this resource.",
    status: HTTPErrorCodes.PROXY_AUTHENTICATION_REQUIRED,
  },
  [HttpErrorEnums.REQUEST_TIMEOUT]: {
    title: "Request Timeout",
    message: "The request took too long to process.",
    status: HTTPErrorCodes.REQUEST_TIMEOUT,
  },
  [HttpErrorEnums.CONFLICT]: {
    title: "Conflict",
    message: "The request conflicts with the current state of the server.",
    status: HTTPErrorCodes.CONFLICT,
  },
  [HttpErrorEnums.GONE]: {
    title: "Gone",
    message: "The requested resource is no longer available.",
    status: HTTPErrorCodes.GONE,
  },
  [HttpErrorEnums.LENGTH_REQUIRED]: {
    title: "Length Required",
    message: "The request did not specify the length of its content.",
    status: HTTPErrorCodes.LENGTH_REQUIRED,
  },
  [HttpErrorEnums.PRECONDITION_FAILED]: {
    title: "Precondition Failed",
    message: "One or more preconditions in the request headers failed.",
    status: HTTPErrorCodes.PRECONDITION_FAILED,
  },
  [HttpErrorEnums.PAYLOAD_TOO_LARGE]: {
    title: "Payload Too Large",
    message: "The request payload is too large to process.",
    status: HTTPErrorCodes.PAYLOAD_TOO_LARGE,
  },
  [HttpErrorEnums.URI_TOO_LONG]: {
    title: "URI Too Long",
    message: "The request URI is too long to process.",
    status: HTTPErrorCodes.URI_TOO_LONG,
  },
  [HttpErrorEnums.UNSUPPORTED_MEDIA_TYPE]: {
    title: "Unsupported Media Type",
    message: "The media type of the request is not supported.",
    status: HTTPErrorCodes.UNSUPPORTED_MEDIA_TYPE,
  },
  [HttpErrorEnums.RANGE_NOT_SATISFIABLE]: {
    title: "Range Not Satisfiable",
    message: "The requested range cannot be satisfied.",
    status: HTTPErrorCodes.RANGE_NOT_SATISFIABLE,
  },
  [HttpErrorEnums.EXPECTATION_FAILED]: {
    title: "Expectation Failed",
    message: "The server cannot meet the requirements of the Expect header.",
    status: HTTPErrorCodes.EXPECTATION_FAILED,
  },
  [HttpErrorEnums.IM_A_TEAPOT]: {
    title: "I'm a Teapot",
    message: "The server refuses to brew coffee because it is a teapot.",
    status: HTTPErrorCodes.IM_A_TEAPOT,
  },
  [HttpErrorEnums.MISDIRECTED_REQUEST]: {
    title: "Misdirected Request",
    message:
      "The request was directed at a server that is not able to produce a response.",
    status: HTTPErrorCodes.MISDIRECTED_REQUEST,
  },
  [HttpErrorEnums.UNPROCESSABLE_ENTITY]: {
    title: "Unprocessable Entity",
    message: "The request was well-formed but contains semantic errors.",
    status: HTTPErrorCodes.UNPROCESSABLE_ENTITY,
  },
  [HttpErrorEnums.LOCKED]: {
    title: "Locked",
    message: "The resource is locked and cannot be accessed.",
    status: HTTPErrorCodes.LOCKED,
  },
  [HttpErrorEnums.FAILED_DEPENDENCY]: {
    title: "Failed Dependency",
    message: "The request failed due to failure of a previous request.",
    status: HTTPErrorCodes.FAILED_DEPENDENCY,
  },
  [HttpErrorEnums.TOO_EARLY]: {
    title: "Too Early",
    message:
      "The server is unwilling to process a request that might be replayed.",
    status: HTTPErrorCodes.TOO_EARLY,
  },
  [HttpErrorEnums.UPGRADE_REQUIRED]: {
    title: "Upgrade Required",
    message: "The client should switch to a different protocol.",
    status: HTTPErrorCodes.UPGRADE_REQUIRED,
  },
  [HttpErrorEnums.PRECONDITION_REQUIRED]: {
    title: "Precondition Required",
    message: "The request must be conditional.",
    status: HTTPErrorCodes.PRECONDITION_REQUIRED,
  },
  [HttpErrorEnums.TOO_MANY_REQUESTS]: {
    title: "Too Many Requests",
    message: "You have sent too many requests in a given amount of time.",
    status: HTTPErrorCodes.TOO_MANY_REQUESTS,
  },
  [HttpErrorEnums.REQUEST_HEADER_FIELDS_TOO_LARGE]: {
    title: "Request Header Fields Too Large",
    message: "The request header fields are too large.",
    status: HTTPErrorCodes.REQUEST_HEADER_FIELDS_TOO_LARGE,
  },
  [HttpErrorEnums.UNAVAILABLE_FOR_LEGAL_REASONS]: {
    title: "Unavailable For Legal Reasons",
    message: "The resource is unavailable for legal reasons.",
    status: HTTPErrorCodes.UNAVAILABLE_FOR_LEGAL_REASONS,
  },
  [HttpErrorEnums.INTERNAL_SERVER_ERROR]: {
    title: "Something went wrong",
    message:
      "There might be a technical issue. We are working on resolving it. Please try again later.",
    status: HTTPErrorCodes.INTERNAL_SERVER_ERROR,
  },
  [HttpErrorEnums.NOT_IMPLEMENTED]: {
    title: "Not Implemented",
    message:
      "The server does not support the functionality required to fulfill the request.",
    status: HTTPErrorCodes.NOT_IMPLEMENTED,
  },
  [HttpErrorEnums.BAD_GATEWAY]: {
    title: "Bad Gateway",
    message:
      "The server received an invalid response from the upstream server.",
    status: HTTPErrorCodes.BAD_GATEWAY,
  },
  [HttpErrorEnums.SERVICE_UNAVAILABLE]: {
    title: "Service unavailable for a reason.",
    message: "There might be a technical issue or client issue.",
    status: HTTPErrorCodes.SERVICE_UNAVAILABLE,
  },
  [HttpErrorEnums.GATEWAY_TIMEOUT]: {
    title: "Gateway Timeout",
    message:
      "The server did not receive a timely response from the upstream server.",
    status: HTTPErrorCodes.GATEWAY_TIMEOUT,
  },
  [HttpErrorEnums.HTTP_VERSION_NOT_SUPPORTED]: {
    title: "HTTP Version Not Supported",
    message: "The HTTP version used in the request is not supported.",
    status: HTTPErrorCodes.HTTP_VERSION_NOT_SUPPORTED,
  },
  [HttpErrorEnums.VARIANT_ALSO_NEGOTIATES]: {
    title: "Variant Also Negotiates",
    message: "The server has an internal configuration error.",
    status: HTTPErrorCodes.VARIANT_ALSO_NEGOTIATES,
  },
  [HttpErrorEnums.INSUFFICIENT_STORAGE]: {
    title: "Insufficient Storage",
    message:
      "The server is unable to store the representation needed to complete the request.",
    status: HTTPErrorCodes.INSUFFICIENT_STORAGE,
  },
  [HttpErrorEnums.LOOP_DETECTED]: {
    title: "Loop Detected",
    message:
      "The server detected an infinite loop while processing the request.",
    status: HTTPErrorCodes.LOOP_DETECTED,
  },
  [HttpErrorEnums.NOT_EXTENDED]: {
    title: "Not Extended",
    message: "Further extensions to the request are required.",
    status: HTTPErrorCodes.NOT_EXTENDED,
  },
  [HttpErrorEnums.NETWORK_AUTHENTICATION_REQUIRED]: {
    title: "Network Authentication Required",
    message: "Network authentication is required to access this resource.",
    status: HTTPErrorCodes.NETWORK_AUTHENTICATION_REQUIRED,
  },
  // custom error codes
  [CustomErrorEnums.USER_NOT_FOUND]: {
    title: "User Not Found",
    message: "The user you are looking for does not exist.",
    status: HTTPErrorCodes.BAD_REQUEST,
    code: CustomHTTPErrorCodes.USER_NOT_FOUND,
  },
  [CustomErrorEnums.INVALID_REQUEST]: {
    title: "Invalid Request",
    message: "The request made is invalid.",
    status: HTTPErrorCodes.BAD_REQUEST,
    code: CustomHTTPErrorCodes.INVALID_REQUEST,
  },
  [CustomErrorEnums.UNAUTHORIZED_USER]: {
    title: "Unauthorized User",
    message:
      "You do not have permission to perform this action. Please ensure you are logged in with the correct account.",
    status: HTTPErrorCodes.UNAUTHORIZED,
    code: CustomHTTPErrorCodes.UNAUTHORIZED_USER,
  },
  [CustomErrorEnums.INVALID_TOKEN]: {
    title: "Invalid Token",
    message:
      "The provided token is invalid, malformed, expired, or has been tampered with.",
    status: HTTPErrorCodes.BAD_REQUEST,
    code: CustomHTTPErrorCodes.UNAUTHORIZED_USER,
  },
};

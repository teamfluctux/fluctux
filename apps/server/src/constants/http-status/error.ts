export enum CustomErrorEnums {
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
  // custom error codes
  "UNAUTHORIZED_USER" = "UNAUTHORIZED_USER",
  "USER_NOT_FOUND" = "USER_NOT_FOUND",
  "INVALID_REQUEST" = "INVALID_REQUEST",
}

export enum HTTPErrorCodes {
  "BAD_REQUEST" = 400,
  "UNAUTHORIZED" = 401,
  "PAYMENT_REQUIRED" = 402,
  "FORBIDDEN" = 403,
  "NOT_FOUND" = 404,
  "METHOD_NOT_ALLOWED" = 405,
  "NOT_ACCEPTABLE" = 406,
  "PROXY_AUTHENTICATION_REQUIRED" = 407,
  "REQUEST_TIMEOUT" = 408,
  "CONFLICT" = 409,
  "GONE" = 410,
  "LENGTH_REQUIRED" = 411,
  "PRECONDITION_FAILED" = 412,
  "PAYLOAD_TOO_LARGE" = 413,
  "URI_TOO_LONG" = 414,
  "UNSUPPORTED_MEDIA_TYPE" = 415,
  "RANGE_NOT_SATISFIABLE" = 416,
  "EXPECTATION_FAILED" = 417,
  "IM_A_TEAPOT" = 418,
  "MISDIRECTED_REQUEST" = 421,
  "UNPROCESSABLE_ENTITY" = 422,
  "LOCKED" = 423,
  "FAILED_DEPENDENCY" = 424,
  "TOO_EARLY" = 425,
  "UPGRADE_REQUIRED" = 426,
  "PRECONDITION_REQUIRED" = 428,
  "TOO_MANY_REQUESTS" = 429,
  "REQUEST_HEADER_FIELDS_TOO_LARGE" = 431,
  "UNAVAILABLE_FOR_LEGAL_REASONS" = 451,
  "INTERNAL_SERVER_ERROR" = 500,
  "NOT_IMPLEMENTED" = 501,
  "BAD_GATEWAY" = 502,
  "SERVICE_UNAVAILABLE" = 503,
  "GATEWAY_TIMEOUT" = 504,
  "HTTP_VERSION_NOT_SUPPORTED" = 505,
  "VARIANT_ALSO_NEGOTIATES" = 506,
  "INSUFFICIENT_STORAGE" = 507,
  "LOOP_DETECTED" = 508,
  "NOT_EXTENDED" = 510,
  "NETWORK_AUTHENTICATION_REQUIRED" = 511,
}

// Custom error codes (X0000)
export enum CustomHTTPErrorCodes {
  "USER_NOT_FOUND" = 1000,
  "UNAUTHORIZED_USER" = 1001,
  "INVALID_REQUEST" = 1002,
}

export const ERROR: {
  [key in CustomErrorEnums]: {
    title: string;
    message: string;
    status: number;
    code?: number;
  };
} = {
  [CustomErrorEnums.BAD_REQUEST]: {
    title: "Bad Request",
    message: "The request cannot be processed due to client error.",
    status: HTTPErrorCodes[CustomErrorEnums.BAD_REQUEST],
  },
  [CustomErrorEnums.UNAUTHORIZED]: {
    title: "Unauthorized",
    message:
      "You are not authorized to access this resource. Please log in or check your permissions.",
    status: HTTPErrorCodes[CustomErrorEnums.UNAUTHORIZED],
  },
  [CustomErrorEnums.PAYMENT_REQUIRED]: {
    title: "Payment Required",
    message: "Payment is required to access this resource.",
    status: HTTPErrorCodes[CustomErrorEnums.PAYMENT_REQUIRED],
  },
  [CustomErrorEnums.FORBIDDEN]: {
    title: "Forbidden",
    message: "You do not have permission to access this resource.",
    status: HTTPErrorCodes[CustomErrorEnums.FORBIDDEN],
  },
  [CustomErrorEnums.NOT_FOUND]: {
    title: "Not Found",
    message: "The requested resource could not be found.",
    status: HTTPErrorCodes[CustomErrorEnums.NOT_FOUND],
  },
  [CustomErrorEnums.METHOD_NOT_ALLOWED]: {
    title: "Method Not Allowed",
    message: "The HTTP method used is not allowed for this resource.",
    status: HTTPErrorCodes[CustomErrorEnums.METHOD_NOT_ALLOWED],
  },
  [CustomErrorEnums.NOT_ACCEPTABLE]: {
    title: "Not Acceptable",
    message: "The request made is not acceptable.",
    status: HTTPErrorCodes[CustomErrorEnums.NOT_ACCEPTABLE],
  },
  [CustomErrorEnums.PROXY_AUTHENTICATION_REQUIRED]: {
    title: "Proxy Authentication Required",
    message: "Proxy authentication is required to access this resource.",
    status: HTTPErrorCodes[CustomErrorEnums.PROXY_AUTHENTICATION_REQUIRED],
  },
  [CustomErrorEnums.REQUEST_TIMEOUT]: {
    title: "Request Timeout",
    message: "The request took too long to process.",
    status: HTTPErrorCodes[CustomErrorEnums.REQUEST_TIMEOUT],
  },
  [CustomErrorEnums.CONFLICT]: {
    title: "Conflict",
    message: "The request conflicts with the current state of the server.",
    status: HTTPErrorCodes[CustomErrorEnums.CONFLICT],
  },
  [CustomErrorEnums.GONE]: {
    title: "Gone",
    message: "The requested resource is no longer available.",
    status: HTTPErrorCodes[CustomErrorEnums.GONE],
  },
  [CustomErrorEnums.LENGTH_REQUIRED]: {
    title: "Length Required",
    message: "The request did not specify the length of its content.",
    status: HTTPErrorCodes[CustomErrorEnums.LENGTH_REQUIRED],
  },
  [CustomErrorEnums.PRECONDITION_FAILED]: {
    title: "Precondition Failed",
    message: "One or more preconditions in the request headers failed.",
    status: HTTPErrorCodes[CustomErrorEnums.PRECONDITION_FAILED],
  },
  [CustomErrorEnums.PAYLOAD_TOO_LARGE]: {
    title: "Payload Too Large",
    message: "The request payload is too large to process.",
    status: HTTPErrorCodes[CustomErrorEnums.PAYLOAD_TOO_LARGE],
  },
  [CustomErrorEnums.URI_TOO_LONG]: {
    title: "URI Too Long",
    message: "The request URI is too long to process.",
    status: HTTPErrorCodes[CustomErrorEnums.URI_TOO_LONG],
  },
  [CustomErrorEnums.UNSUPPORTED_MEDIA_TYPE]: {
    title: "Unsupported Media Type",
    message: "The media type of the request is not supported.",
    status: HTTPErrorCodes[CustomErrorEnums.UNSUPPORTED_MEDIA_TYPE],
  },
  [CustomErrorEnums.RANGE_NOT_SATISFIABLE]: {
    title: "Range Not Satisfiable",
    message: "The requested range cannot be satisfied.",
    status: HTTPErrorCodes[CustomErrorEnums.RANGE_NOT_SATISFIABLE],
  },
  [CustomErrorEnums.EXPECTATION_FAILED]: {
    title: "Expectation Failed",
    message: "The server cannot meet the requirements of the Expect header.",
    status: HTTPErrorCodes[CustomErrorEnums.EXPECTATION_FAILED],
  },
  [CustomErrorEnums.IM_A_TEAPOT]: {
    title: "I'm a Teapot",
    message: "The server refuses to brew coffee because it is a teapot.",
    status: HTTPErrorCodes[CustomErrorEnums.IM_A_TEAPOT],
  },
  [CustomErrorEnums.MISDIRECTED_REQUEST]: {
    title: "Misdirected Request",
    message:
      "The request was directed at a server that is not able to produce a response.",
    status: HTTPErrorCodes[CustomErrorEnums.MISDIRECTED_REQUEST],
  },
  [CustomErrorEnums.UNPROCESSABLE_ENTITY]: {
    title: "Unprocessable Entity",
    message: "The request was well-formed but contains semantic errors.",
    status: HTTPErrorCodes[CustomErrorEnums.UNPROCESSABLE_ENTITY],
  },
  [CustomErrorEnums.LOCKED]: {
    title: "Locked",
    message: "The resource is locked and cannot be accessed.",
    status: HTTPErrorCodes[CustomErrorEnums.LOCKED],
  },
  [CustomErrorEnums.FAILED_DEPENDENCY]: {
    title: "Failed Dependency",
    message: "The request failed due to failure of a previous request.",
    status: HTTPErrorCodes[CustomErrorEnums.FAILED_DEPENDENCY],
  },
  [CustomErrorEnums.TOO_EARLY]: {
    title: "Too Early",
    message:
      "The server is unwilling to process a request that might be replayed.",
    status: HTTPErrorCodes[CustomErrorEnums.TOO_EARLY],
  },
  [CustomErrorEnums.UPGRADE_REQUIRED]: {
    title: "Upgrade Required",
    message: "The client should switch to a different protocol.",
    status: HTTPErrorCodes[CustomErrorEnums.UPGRADE_REQUIRED],
  },
  [CustomErrorEnums.PRECONDITION_REQUIRED]: {
    title: "Precondition Required",
    message: "The request must be conditional.",
    status: HTTPErrorCodes[CustomErrorEnums.PRECONDITION_REQUIRED],
  },
  [CustomErrorEnums.TOO_MANY_REQUESTS]: {
    title: "Too Many Requests",
    message: "You have sent too many requests in a given amount of time.",
    status: HTTPErrorCodes[CustomErrorEnums.TOO_MANY_REQUESTS],
  },
  [CustomErrorEnums.REQUEST_HEADER_FIELDS_TOO_LARGE]: {
    title: "Request Header Fields Too Large",
    message: "The request header fields are too large.",
    status: HTTPErrorCodes[CustomErrorEnums.REQUEST_HEADER_FIELDS_TOO_LARGE],
  },
  [CustomErrorEnums.UNAVAILABLE_FOR_LEGAL_REASONS]: {
    title: "Unavailable For Legal Reasons",
    message: "The resource is unavailable for legal reasons.",
    status: HTTPErrorCodes[CustomErrorEnums.UNAVAILABLE_FOR_LEGAL_REASONS],
  },
  [CustomErrorEnums.INTERNAL_SERVER_ERROR]: {
    title: "Something went wrong",
    message:
      "There might be a technical issue. We are working on resolving it. Please try again later.",
    status: HTTPErrorCodes[CustomErrorEnums.INTERNAL_SERVER_ERROR],
  },
  [CustomErrorEnums.NOT_IMPLEMENTED]: {
    title: "Not Implemented",
    message:
      "The server does not support the functionality required to fulfill the request.",
    status: HTTPErrorCodes[CustomErrorEnums.NOT_IMPLEMENTED],
  },
  [CustomErrorEnums.BAD_GATEWAY]: {
    title: "Bad Gateway",
    message:
      "The server received an invalid response from the upstream server.",
    status: HTTPErrorCodes[CustomErrorEnums.BAD_GATEWAY],
  },
  [CustomErrorEnums.SERVICE_UNAVAILABLE]: {
    title: "Service unavailable for a reason.",
    message: "There might be a technical issue or client issue.",
    status: HTTPErrorCodes[CustomErrorEnums.SERVICE_UNAVAILABLE],
  },
  [CustomErrorEnums.GATEWAY_TIMEOUT]: {
    title: "Gateway Timeout",
    message:
      "The server did not receive a timely response from the upstream server.",
    status: HTTPErrorCodes[CustomErrorEnums.GATEWAY_TIMEOUT],
  },
  [CustomErrorEnums.HTTP_VERSION_NOT_SUPPORTED]: {
    title: "HTTP Version Not Supported",
    message: "The HTTP version used in the request is not supported.",
    status: HTTPErrorCodes[CustomErrorEnums.HTTP_VERSION_NOT_SUPPORTED],
  },
  [CustomErrorEnums.VARIANT_ALSO_NEGOTIATES]: {
    title: "Variant Also Negotiates",
    message: "The server has an internal configuration error.",
    status: HTTPErrorCodes[CustomErrorEnums.VARIANT_ALSO_NEGOTIATES],
  },
  [CustomErrorEnums.INSUFFICIENT_STORAGE]: {
    title: "Insufficient Storage",
    message:
      "The server is unable to store the representation needed to complete the request.",
    status: HTTPErrorCodes[CustomErrorEnums.INSUFFICIENT_STORAGE],
  },
  [CustomErrorEnums.LOOP_DETECTED]: {
    title: "Loop Detected",
    message:
      "The server detected an infinite loop while processing the request.",
    status: HTTPErrorCodes[CustomErrorEnums.LOOP_DETECTED],
  },
  [CustomErrorEnums.NOT_EXTENDED]: {
    title: "Not Extended",
    message: "Further extensions to the request are required.",
    status: HTTPErrorCodes[CustomErrorEnums.NOT_EXTENDED],
  },
  [CustomErrorEnums.NETWORK_AUTHENTICATION_REQUIRED]: {
    title: "Network Authentication Required",
    message: "Network authentication is required to access this resource.",
    status: HTTPErrorCodes[CustomErrorEnums.NETWORK_AUTHENTICATION_REQUIRED],
  },
  // custom error codes
  [CustomErrorEnums.USER_NOT_FOUND]: {
    title: "User Not Found",
    message: "The user you are looking for does not exist.",
    status: HTTPErrorCodes[CustomErrorEnums.BAD_REQUEST],
    code: CustomHTTPErrorCodes.USER_NOT_FOUND,
  },
  [CustomErrorEnums.INVALID_REQUEST]: {
    title: "Invalid Request",
    message: "The request made is invalid.",
    status: HTTPErrorCodes[CustomErrorEnums.BAD_REQUEST],
    code: CustomHTTPErrorCodes.INVALID_REQUEST,
  },
  [CustomErrorEnums.UNAUTHORIZED_USER]: {
    title: "Unauthorized User",
    message:
      "You do not have permission to perform this action. Please ensure you are logged in with the correct account.",
    status: HTTPErrorCodes[CustomErrorEnums.UNAUTHORIZED],
    code: CustomHTTPErrorCodes.UNAUTHORIZED_USER,
  },
};

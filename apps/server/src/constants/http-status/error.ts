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
  // Custom errors
  "UNAUTHORIZED_USER" = "UNAUTHORIZED_USER",
  "INVITATION_NOT_FOUND" = "INVITATION_NOT_FOUND",
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

// Custom error codes (X000 range based on HTTP category)
export enum CustomHTTPErrorCodes {
  "UNAUTHORIZED_USER" = 4001, // 401 -> 4000 range (Unauthorized related)
  "INVALID_REQUEST" = 4002,
  "INVITATION_NOT_FOUND" = 4041, // 404 -> 4040 range (Not Found related)
  "USER_NOT_FOUND" = 4042,
}

export const ERROR: {
  [key in CustomErrorEnums]: {
    title: string;
    message: string;
    statusCode: number;
  };
} = {
  [CustomErrorEnums.BAD_REQUEST]: {
    title: "Bad Request",
    message: "The request cannot be processed due to client error.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.BAD_REQUEST],
  },
  [CustomErrorEnums.UNAUTHORIZED]: {
    title: "Unauthorized",
    message: "Authentication is required to access this resource.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.UNAUTHORIZED],
  },
  [CustomErrorEnums.PAYMENT_REQUIRED]: {
    title: "Payment Required",
    message: "Payment is required to access this resource.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.PAYMENT_REQUIRED],
  },
  [CustomErrorEnums.FORBIDDEN]: {
    title: "Forbidden",
    message: "You do not have permission to access this resource.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.FORBIDDEN],
  },
  [CustomErrorEnums.NOT_FOUND]: {
    title: "Not Found",
    message: "The requested resource could not be found.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.NOT_FOUND],
  },
  [CustomErrorEnums.METHOD_NOT_ALLOWED]: {
    title: "Method Not Allowed",
    message: "The HTTP method used is not allowed for this resource.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.METHOD_NOT_ALLOWED],
  },
  [CustomErrorEnums.NOT_ACCEPTABLE]: {
    title: "Not Acceptable",
    message: "The request made is not acceptable.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.NOT_ACCEPTABLE],
  },
  [CustomErrorEnums.PROXY_AUTHENTICATION_REQUIRED]: {
    title: "Proxy Authentication Required",
    message: "Proxy authentication is required to access this resource.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.PROXY_AUTHENTICATION_REQUIRED],
  },
  [CustomErrorEnums.REQUEST_TIMEOUT]: {
    title: "Request Timeout",
    message: "The request took too long to process.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.REQUEST_TIMEOUT],
  },
  [CustomErrorEnums.CONFLICT]: {
    title: "Conflict",
    message: "The request conflicts with the current state of the server.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.CONFLICT],
  },
  [CustomErrorEnums.GONE]: {
    title: "Gone",
    message: "The requested resource is no longer available.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.GONE],
  },
  [CustomErrorEnums.LENGTH_REQUIRED]: {
    title: "Length Required",
    message: "The request did not specify the length of its content.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.LENGTH_REQUIRED],
  },
  [CustomErrorEnums.PRECONDITION_FAILED]: {
    title: "Precondition Failed",
    message: "One or more preconditions in the request headers failed.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.PRECONDITION_FAILED],
  },
  [CustomErrorEnums.PAYLOAD_TOO_LARGE]: {
    title: "Payload Too Large",
    message: "The request payload is too large to process.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.PAYLOAD_TOO_LARGE],
  },
  [CustomErrorEnums.URI_TOO_LONG]: {
    title: "URI Too Long",
    message: "The request URI is too long to process.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.URI_TOO_LONG],
  },
  [CustomErrorEnums.UNSUPPORTED_MEDIA_TYPE]: {
    title: "Unsupported Media Type",
    message: "The media type of the request is not supported.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.UNSUPPORTED_MEDIA_TYPE],
  },
  [CustomErrorEnums.RANGE_NOT_SATISFIABLE]: {
    title: "Range Not Satisfiable",
    message: "The requested range cannot be satisfied.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.RANGE_NOT_SATISFIABLE],
  },
  [CustomErrorEnums.EXPECTATION_FAILED]: {
    title: "Expectation Failed",
    message: "The server cannot meet the requirements of the Expect header.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.EXPECTATION_FAILED],
  },
  [CustomErrorEnums.IM_A_TEAPOT]: {
    title: "I'm a Teapot",
    message: "The server refuses to brew coffee because it is a teapot.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.IM_A_TEAPOT],
  },
  [CustomErrorEnums.MISDIRECTED_REQUEST]: {
    title: "Misdirected Request",
    message:
      "The request was directed at a server that is not able to produce a response.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.MISDIRECTED_REQUEST],
  },
  [CustomErrorEnums.UNPROCESSABLE_ENTITY]: {
    title: "Unprocessable Entity",
    message: "The request was well-formed but contains semantic errors.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.UNPROCESSABLE_ENTITY],
  },
  [CustomErrorEnums.LOCKED]: {
    title: "Locked",
    message: "The resource is locked and cannot be accessed.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.LOCKED],
  },
  [CustomErrorEnums.FAILED_DEPENDENCY]: {
    title: "Failed Dependency",
    message: "The request failed due to failure of a previous request.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.FAILED_DEPENDENCY],
  },
  [CustomErrorEnums.TOO_EARLY]: {
    title: "Too Early",
    message:
      "The server is unwilling to process a request that might be replayed.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.TOO_EARLY],
  },
  [CustomErrorEnums.UPGRADE_REQUIRED]: {
    title: "Upgrade Required",
    message: "The client should switch to a different protocol.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.UPGRADE_REQUIRED],
  },
  [CustomErrorEnums.PRECONDITION_REQUIRED]: {
    title: "Precondition Required",
    message: "The request must be conditional.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.PRECONDITION_REQUIRED],
  },
  [CustomErrorEnums.TOO_MANY_REQUESTS]: {
    title: "Too Many Requests",
    message: "You have sent too many requests in a given amount of time.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.TOO_MANY_REQUESTS],
  },
  [CustomErrorEnums.REQUEST_HEADER_FIELDS_TOO_LARGE]: {
    title: "Request Header Fields Too Large",
    message: "The request header fields are too large.",
    statusCode:
      HTTPErrorCodes[CustomErrorEnums.REQUEST_HEADER_FIELDS_TOO_LARGE],
  },
  [CustomErrorEnums.UNAVAILABLE_FOR_LEGAL_REASONS]: {
    title: "Unavailable For Legal Reasons",
    message: "The resource is unavailable for legal reasons.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.UNAVAILABLE_FOR_LEGAL_REASONS],
  },
  [CustomErrorEnums.INTERNAL_SERVER_ERROR]: {
    title: "Something went wrong",
    message:
      "There might be a technical issue. We are working on resolving it. Please try again later.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.INTERNAL_SERVER_ERROR],
  },
  [CustomErrorEnums.NOT_IMPLEMENTED]: {
    title: "Not Implemented",
    message:
      "The server does not support the functionality required to fulfill the request.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.NOT_IMPLEMENTED],
  },
  [CustomErrorEnums.BAD_GATEWAY]: {
    title: "Bad Gateway",
    message:
      "The server received an invalid response from the upstream server.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.BAD_GATEWAY],
  },
  [CustomErrorEnums.SERVICE_UNAVAILABLE]: {
    title: "Service unavailable for a reason.",
    message: "There might be a technical issue or client issue.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.SERVICE_UNAVAILABLE],
  },
  [CustomErrorEnums.GATEWAY_TIMEOUT]: {
    title: "Gateway Timeout",
    message:
      "The server did not receive a timely response from the upstream server.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.GATEWAY_TIMEOUT],
  },
  [CustomErrorEnums.HTTP_VERSION_NOT_SUPPORTED]: {
    title: "HTTP Version Not Supported",
    message: "The HTTP version used in the request is not supported.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.HTTP_VERSION_NOT_SUPPORTED],
  },
  [CustomErrorEnums.VARIANT_ALSO_NEGOTIATES]: {
    title: "Variant Also Negotiates",
    message: "The server has an internal configuration error.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.VARIANT_ALSO_NEGOTIATES],
  },
  [CustomErrorEnums.INSUFFICIENT_STORAGE]: {
    title: "Insufficient Storage",
    message:
      "The server is unable to store the representation needed to complete the request.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.INSUFFICIENT_STORAGE],
  },
  [CustomErrorEnums.LOOP_DETECTED]: {
    title: "Loop Detected",
    message:
      "The server detected an infinite loop while processing the request.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.LOOP_DETECTED],
  },
  [CustomErrorEnums.NOT_EXTENDED]: {
    title: "Not Extended",
    message: "Further extensions to the request are required.",
    statusCode: HTTPErrorCodes[CustomErrorEnums.NOT_EXTENDED],
  },
  [CustomErrorEnums.NETWORK_AUTHENTICATION_REQUIRED]: {
    title: "Network Authentication Required",
    message: "Network authentication is required to access this resource.",
    statusCode:
      HTTPErrorCodes[CustomErrorEnums.NETWORK_AUTHENTICATION_REQUIRED],
  },

  // Custom errors with custom status codes
  [CustomErrorEnums.UNAUTHORIZED_USER]: {
    title: "Unauthorized Access",
    message:
      "You do not have the necessary permissions to access this resource.",
    statusCode: CustomHTTPErrorCodes.UNAUTHORIZED_USER,
  },
  [CustomErrorEnums.INVALID_REQUEST]: {
    title: "Invalid Request",
    message: "The request made is invalid.",
    statusCode: CustomHTTPErrorCodes.INVALID_REQUEST,
  },
  [CustomErrorEnums.INVITATION_NOT_FOUND]: {
    title: "Invitation Not Found",
    message: "The invitation you are looking for does not exist.",
    statusCode: CustomHTTPErrorCodes.INVITATION_NOT_FOUND,
  },
  [CustomErrorEnums.USER_NOT_FOUND]: {
    title: "User Not Found",
    message: "The user you are looking for does not exist.",
    statusCode: CustomHTTPErrorCodes.USER_NOT_FOUND,
  },
};

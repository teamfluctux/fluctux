import { ERROR } from "@/constants/http-status";
import { ApiError } from "@/utils/ApiError";
import { ApiResponse } from "@/utils/ApiResponse";

describe("ApiResponse Testing", () => {
  it("It returns a successful API response includes properties such as status, message, success?, and data?.")
  let actualApiResponse: ApiResponse;
  beforeEach(() => {
    actualApiResponse = new ApiResponse(200, "OK");
  });

  test("Should be an instance of ApiResponse", () => {
    expect(actualApiResponse).toBeInstanceOf(ApiResponse);
  });

  test("Should return success message from ApiResponse with null data", () => {
    expect(actualApiResponse).toEqual({
      status: 200,
      message: "OK",
      data: null,
      success: true,
    });
  });

  test("Should return success message from ApiResponse with any data", () => {
    const data = {
      key: "value",
    };

    expect(new ApiResponse(201, "OK", data)).toEqual({
      status: 201,
      message: "OK",
      data: data,
      success: true,
    });
  });
});

describe("ApiError Testing", () => {
  let actualApiError: ApiError;
  const errors = [ERROR.UNAUTHORIZED_USER, ERROR.INVALID_REQUEST];
  const expectedApiError = {
    status: 401,
    success: false,
    errors: errors,
    message: "error",
  };
  beforeEach(() => {
    actualApiError = new ApiError(401, "error", "", errors);
  });

  test("Should be an instance of ApiError", () => {
    expect(actualApiError).toBeInstanceOf(ApiError);
  });

  test("Should return error message from ApiError with correct properties", () => {
    expect(actualApiError).toEqual(expect.objectContaining(expectedApiError));
    expect(actualApiError.status).toBe(expectedApiError.status);
    expect(actualApiError.success).toBe(expectedApiError.success);
    expect(actualApiError.errors).toBe(expectedApiError.errors);
    expect(actualApiError.message).toEqual(expectedApiError.message);
  });
});

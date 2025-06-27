import { ApiResponse } from "@/utils/ApiResponse";

describe("ApiResponse Testing", () => {
  test("Should return success message from ApiResponse with null data", () => {
    expect(new ApiResponse(200, "Test success")).toEqual({
      status: 200,
      message: "Test success",
      data: null,
      success: true,
    });
  });

  test("Should return success message from ApiResponse with any data", () => {
    const data = {
      key: "value",
    };

    expect(new ApiResponse(201, "Created", data)).toEqual({
      status: 201,
      message: "Created",
      data: data,
      success: true,
    });
  });
});

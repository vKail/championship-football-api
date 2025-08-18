export class ApiResponse<T> {
  constructor(
    public status: number,
    public message: string,
    public data: T | null,
  ) {}

  static success<T>(data: T, message = 'Operation successful'): ApiResponse<T> {
    return new ApiResponse(200, message, data);
  }

  static error<T>(status: number, message: string): ApiResponse<T> {
    return new ApiResponse(status, message, null);
  }
}

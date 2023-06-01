import { Response } from "express";

class ResponseServices {
  constructor() {}

  public success<T>(res: Response, data: T, code: number = 200) {
    return res.status(code).json({
      code,
      status: true,
      data,
    });
  }

  public error(res: Response, message: string, code: number = 500) {
    return res.status(code).json({
      code,
      status: false,
      message,
    });
  }

  public throwError(res: Response, message: string, code: number = 500) {
    return this.error(res, message, code);
  }
}

export default ResponseServices;

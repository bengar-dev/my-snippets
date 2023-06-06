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

  public filterData(data: any, keysArray: string[]) {
    let result: any = {};
    for (const el in data) {
      if (!keysArray.includes(el)) {
        result = {
          ...result,
          [el]: data[el],
        };
      }
    }
    return result;
  }
}

export default ResponseServices;

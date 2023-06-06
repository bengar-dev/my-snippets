export type Response<T> = {
  code: number;
  data: T;
  status: boolean;
};

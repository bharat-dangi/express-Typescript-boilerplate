export interface IPromiseResponse<DataType, ErrorType> {
  data: DataType | any;
  error: ErrorType | Error | null;
}

/** @format */

export enum IResponseStatus {
    Error = 0,
    Success = 1,
}

export interface IResponseBase {
    status: IResponseStatus;
    fieldError?: string;
    message?: string;
}

export interface IResponseAdvance<T = any> extends IResponseBase {
    data?: T;
}

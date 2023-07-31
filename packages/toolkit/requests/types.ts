import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

export type RequestConfigType<TRequestConfigData> =
    AxiosRequestConfig<TRequestConfigData>

export type RequestsResponseType<TResponseData, TResponseHeaders> =
    AxiosResponse<TResponseData, TResponseHeaders>

export type ErrorType<TResponseData, TResponseHeaders> = AxiosError<
    TResponseData,
    TResponseHeaders
>

export type ResponseBaseMethodType<
    TResponseData,
    TResponseHeaders
> = RequestsResponseType<TResponseData, TResponseHeaders>

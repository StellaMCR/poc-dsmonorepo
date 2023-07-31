import { client_http } from "../client"
import { RequestConfigType } from "../types"
import { GetMethodType } from "./types"

export const getMethod = async <TResponseData, TRequestConfigData>(
    config: RequestConfigType<TRequestConfigData>,
): Promise<GetMethodType<TResponseData, TRequestConfigData>> => {
    try {
        return await client_http.request({ ...config, method: 'GET' })
    }
    catch (error) {
        return Promise.reject(error)
    }
}
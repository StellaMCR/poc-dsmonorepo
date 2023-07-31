import { client_http } from "../client"
import { RequestConfigType } from "../types"
import { PutMethodType } from "./types"

export const putMethod = async <TResponseData, TRequestConfigData>(
    config: RequestConfigType<TRequestConfigData>,
): Promise<PutMethodType<TResponseData, TRequestConfigData>> => {
    try {
        return await client_http.request({ ...config, method: 'PUT' })
    }
    catch (error) {
        return Promise.reject(error)
    }
}
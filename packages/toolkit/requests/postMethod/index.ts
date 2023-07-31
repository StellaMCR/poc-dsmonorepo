import { client_http } from "../client"
import { RequestConfigType } from "../types"
import { PostMethodType } from "./types"

export const postMethod = async <TResponseData, TRequestConfigData>(
    config: RequestConfigType<TRequestConfigData>,
): Promise<PostMethodType<TResponseData, TRequestConfigData>> => {
    try {
        return await client_http.request({ ...config, method: 'POST' })
    }
    catch (error) {
        return Promise.reject(error)
    }
}
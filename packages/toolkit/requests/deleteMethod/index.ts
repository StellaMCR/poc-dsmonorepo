import { client_http } from "../client"
import { RequestConfigType } from "../types"
import { DeleteMethodType } from "./types"

export const deleteMethod = async <TResponseData, TRequestConfigData>(
    config: RequestConfigType<TRequestConfigData>,
): Promise<DeleteMethodType<TResponseData, TRequestConfigData>> => {
    try {
        return await client_http.request({ ...config, method: 'DELETE' })
    }
    catch (error) {
        return Promise.reject(error)
    }
}
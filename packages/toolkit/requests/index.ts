import { deleteMethod } from './deleteMethod'
import { getMethod } from './getMethod'
import { postMethod } from './postMethod'
import { putMethod } from './putMethod'
import { RequestConfigType } from './types'

export const requests = {
    get: <TResponseData, TRequestConfigData>(
        config: RequestConfigType<TRequestConfigData>,
    ) => getMethod<TResponseData, TRequestConfigData>(config),

    post: <TResponseData, TRequestConfigData>(
        config: RequestConfigType<TRequestConfigData>,
    ) => postMethod<TResponseData, TRequestConfigData>(config),

    put: <TResponseData, TRequestConfigData>(
        config: RequestConfigType<TRequestConfigData>,
    ) => putMethod<TResponseData, TRequestConfigData>(config),

    delete: <TResponseData, TRequestConfigData>(
        config: RequestConfigType<TRequestConfigData>,
    ) => deleteMethod<TResponseData, TRequestConfigData>(config),
}

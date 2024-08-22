/* eslint-disable no-extra-semi */
import { QueryClient, QueryKey } from '@tanstack/react-query'
import { Draft, produce } from 'immer'

/**
 * A function that updates cached data based on the old data.
 *
 * @template T - The type of the cached data.
 * @param {QueryClient} queryClient - The queryClient instance.
 * @param {T | undefined} oldData - The current cached data or undefined if no data exists.
 * @returns {T} - The updated data.
 */
type UpdaterFunction<T> = (draft: Draft<NoInfer<T>> | undefined) => T

/**
 * A custom hook to update cached data in React Query.
 *
 * @template T - The type of the data in the cache.
 * @returns {(key: QueryKey, updater: T | UpdaterFunction<T>) => void} - A function to update the cached data.
 */
export const useUpdateCachedData = <T>(queryClient: QueryClient) => {
    /**
     * Updates the cached data for a specific query key.
     *
     * @param {QueryKey} key - The key that identifies the cached data to update.
     * @param {T | UpdaterFunction<T>} updater - The new data or a function that returns the updated data.
     */
    const updateCachedData = (key: QueryKey, updater: T | UpdaterFunction<T>) => {
        queryClient.setQueryData<T>(key, oldData => {
            // Apply the updater function to modify the old data
            if (typeof updater !== 'function') return updater

            return produce(oldData, draft => {
                ;(updater as UpdaterFunction<T>)(draft)
            })
        })
    }

    return updateCachedData
}

export default useUpdateCachedData

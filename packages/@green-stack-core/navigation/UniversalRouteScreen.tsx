'use client'
import { useQuery } from '@tanstack/react-query'
import { createQueryBridge } from './UniversalRouteScreen.helpers'
import type { UniversalRouteProps, QueryFn } from './UniversalRouteScreen.helpers'
import { useRouteParams } from './useRouteParams'

/* --- Default Query Bridge ------------------------------------------------------------------------ */

const DEFAULT_BRIDGE = createQueryBridge({
    routeDataFetcher: async (args) => (args as { params: Record<string, string | string[]> }),
    routeParamsToQueryKey: () => ['default-bridge'],
    routeParamsToQueryInput: (routeParams) => ({ params: routeParams }),
})

/** --- <UniversalRouteScreen/> -------------------------------------------------------------------- */
/** -i- Universal Route Wrapper to provide query data on mobile, the browser and during server rendering */
export const UniversalRouteScreen = <
    ARGS extends Record<string, unknown> = Record<string, unknown>,
    RES extends Record<string, unknown> = Record<string, unknown>,
>(props: UniversalRouteProps<ARGS, RES>) => {
    // Props
    const { params: routeParams, searchParams, queryBridge = DEFAULT_BRIDGE, routeScreen: RouteScreen, ...screenProps } = props
    const { routeParamsToQueryKey, routeParamsToQueryInput, routeDataFetcher } = queryBridge
    const fetcherDataToProps = queryBridge.fetcherDataToProps || ((data: Awaited<ReturnType<QueryFn<ARGS, RES>>>) => data)

    // Hooks
    const expoRouterParams = useRouteParams(props)

    // Vars
    const queryParams = { ...routeParams, ...searchParams, ...expoRouterParams }
    const queryKey = routeParamsToQueryKey(queryParams as any)
    const queryInput = routeParamsToQueryInput(queryParams as any)

    // -- Query --

    const queryConfig = {
        queryKey,
        queryFn: async () => await routeDataFetcher(queryInput as unknown as ARGS),
        initialData: queryBridge.initialData as Awaited<RES>,
    }

    // -- Mobile --
    
    const { data: fetcherData } = useQuery(queryConfig)
    const routeDataProps = fetcherDataToProps(fetcherData as any) as Record<string, unknown>

    return (
        <RouteScreen
            {...routeDataProps}
            queryKey={queryKey}
            queryInput={queryInput}
            {...screenProps} // @ts-ignore
            params={routeParams}
            searchParams={searchParams}
        />
    )
}

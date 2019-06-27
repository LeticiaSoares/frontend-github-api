export const START_LOADING = '[loading] START'
export const STOP_LOADING = '[loading]  STOP'

export const loadingActions  = {
    startLoading:  () => ({
        type: START_LOADING,
    }),
    stopLoading:  () => ({
        type: STOP_LOADING,
    })
}


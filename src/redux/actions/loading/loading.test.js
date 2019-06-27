import {
    loadingActions,
    START_LOADING,
    STOP_LOADING,
} from './index'

describe('loading.actions', () => {
        it('should dispatch action startLoading', () => {
            const expectedAction = {
                type: START_LOADING,
            }
            expect(loadingActions.startLoading())
                .toEqual(expectedAction)
        }),
       it('should dispatch action stopLoading', () => {
            const expectedAction = {
                type: STOP_LOADING,
            }
             expect(loadingActions.stopLoading())
               .toEqual(expectedAction)
       })
})

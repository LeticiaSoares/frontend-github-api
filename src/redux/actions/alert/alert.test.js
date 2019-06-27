import {
    alertActions,
    OPEN_ALERT,
    CLOSE_ALERT,
} from './index'

describe('alert.actions', () => {
        it('should dispatch action getRepos', () => {
            const mock = { message: 'Hello' }
            const expectedAction = {
                type: OPEN_ALERT,
                payload: mock
            }
            expect(alertActions.openAlert(mock))
                .toEqual(expectedAction)
        }),
       it('should dispatch action getRepos', () => {
            const expectedAction = {
                type: CLOSE_ALERT,
                payload: {}
            }
             expect(alertActions.closeAlert())
               .toEqual(expectedAction)
       })
})

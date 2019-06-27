import {
    githubActions,
    GET_USER_REPOS,
    SUCCESS_USER_REPOS,
} from './index'

describe('github.actions', () => {
        it('should dispatch action getRepos', () => {
            const mock = { user: 'LeticiaSoares' }
            const expectedAction = {
                type: GET_USER_REPOS,
                payload: mock
            }
            expect(githubActions.getRepos(mock))
                .toEqual(expectedAction)
        }),
       it('should dispatch action getRepos', () => {
            const mock = { user: 'LeticiaSoares' }
            const expectedAction = {
                type: SUCCESS_USER_REPOS,
                payload: mock
            }
             expect(githubActions.sucess(mock))
               .toEqual(expectedAction)
       })
})

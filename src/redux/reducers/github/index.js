import { SUCCESS_USER_REPOS,SELECT_REPO } from '../../actions/github'

const githubReducer = (
    state = {},
    action
) => {
    switch (action.type) {
        case SUCCESS_USER_REPOS:
            return Object.assign({}, state, {
                ...action.payload
            })
        case SELECT_REPO:
            return Object.assign({}, state, {
               selected : {
                   ...action.payload
               }
            })
        default:
            return state
    }
}

export default githubReducer


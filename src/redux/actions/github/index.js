export const GET_USER_REPOS = 'GET USER REPOS'
export const SELECT_REPO = 'SELECT REPO'
export const SUCCESS_USER_REPOS = 'USER REPOS SUCESS'
export const FAIL_USER_REPOS = 'USER REPOS FAIL'

export const githubActions = {
    getRepos: ({user}) => ({
        type : GET_USER_REPOS,
        payload: {user}
    }),
    sucess: data => ({
      type: SUCCESS_USER_REPOS,
      payload: data
    }),
    fail: error => ({
      type: FAIL_USER_REPOS,
      payload: error
    }),
  }

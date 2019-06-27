export const GET_USER_REPOS = 'GET USER REPOS'
export const GET_USER_COMMITS = 'GET USER COMMITS'
export const SELECT_REPO = 'SELECT REPO'
export const SUCCESS_USER_REPOS = 'USER REPOS SUCESS'
export const FAIL_USER_REPOS = 'USER REPOS FAIL'

export const githubActions = {
    getRepos: ({user}) => ({
        type : GET_USER_REPOS,
        payload: {user}
    }),
    getCommits : ({repo}) => ({
        type : GET_USER_COMMITS,
        payload : {repo}
    }),
    setRepoSelecte : ({repo})=>({
        type : SELECT_REPO,
        payload : {repo}
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

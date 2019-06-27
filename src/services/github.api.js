import api from '../infra/apiConfig'

export function getUserRepos(user){
    const url = `/users/${user}/repos`
    return api().get(url)
}
export function getRepoCommits({user,repo}){
    const url = `/repos/${user}/${repo}/commits`
    return api().get(url)
}
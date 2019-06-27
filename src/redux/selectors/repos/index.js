export function getUser(state){
    const { user } = state;
    return user;
}

export function getReposList(state){
    const { repos } = state.github;
    return repos;
}

export function getRepoSelected(state){
    const { selected } = state.repos
    return selected.repo
}

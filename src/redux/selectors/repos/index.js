export function getUser(state){
    const { user } = state;
    return user;
}

export function getReposList(state){
    const { repos } = state.github;
    return repos;
}



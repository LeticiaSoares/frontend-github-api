import React , { useEffect } from 'react';
import SearchUser from './seachUser'
import {connect} from "react-redux";
import {GET_USER_REPOS} from "../../redux/actions/github";
import {getReposList, getUser} from "../../redux/selectors/repos";
import {isLoading} from "../../redux/selectors/loading";
import { startReposSaga } from '../../redux'

const mapStateToProps = state => {
    return {
        repos: getReposList(state),
        user : getUser(state),
        isLoading: isLoading(state)
    }
}
const mapDispatchToProps = dispatch => ({
    onGetRepos (user) {
        dispatch({
            type: GET_USER_REPOS,
            payload: {user}
        })
    }
})
const SearchUserConnected =connect(() =>
    mapStateToProps,
    mapDispatchToProps
)(SearchUser)

export default () => {
    useEffect(startReposSaga, [])
    return (
     <SearchUserConnected />
    )
}



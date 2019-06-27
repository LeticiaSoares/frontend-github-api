import { call, put,takeEvery } from 'redux-saga/effects'
import  { getUserRepos } from '../../../services/github.api'
import {GET_USER_REPOS, githubActions} from '../../actions/github'

export function* reposSaga() {
    yield takeEvery(GET_USER_REPOS, fetchUserRepos)
}
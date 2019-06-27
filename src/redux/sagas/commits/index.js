import { call, put,takeEvery } from 'redux-saga/effects'
import { getRepoCommits} from '../../../services/github.api'
import {githubActions, SELECT_REPO} from '../../actions/github'

function* fetchCommits(action){
    try{
        const { data }  = yield call(getRepoCommits,action.payload)
        yield put(githubActions.sucess({ commits : data}))
    }catch (e) {
        yield put(githubActions.fail(e))
    }
}

export function* commmitsSaga() {
    yield takeEvery(SELECT_REPO, fetchCommits)
}
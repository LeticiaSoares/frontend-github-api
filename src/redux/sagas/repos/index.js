import { call, put,takeEvery } from 'redux-saga/effects'
import  { getUserRepos } from '../../../services/github.api'
import {GET_USER_REPOS, githubActions} from '../../actions/github'
import {alertActions} from '../../actions/alert'
import {loadingActions} from '../../actions/loading'

function* fetchUserRepos(action) {
  try {
    yield put(loadingActions.startLoading())
    const response  = yield call(getUserRepos,action.payload.user)
    yield put(githubActions.sucess({ user : action.payload.user, repos : response.data,}))
  } catch (ex) {
    yield put(githubActions.fail(ex))
    yield put(alertActions.openAlert({message : 'Usuário não encontrado!'}))
  }
  yield put(loadingActions.stopLoading())
}

export function* reposSaga() {
  yield takeEvery(GET_USER_REPOS, fetchUserRepos)
}
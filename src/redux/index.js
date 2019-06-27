import reducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose  } from 'redux'
import {reposSaga} from "./sagas/repos";
import {commmitsSaga} from "./sagas/commits";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

export default createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
)

export function startReposSaga(){
    sagaMiddleware.run(reposSaga)
}
export function startCommitSaga(){
    sagaMiddleware.run(commmitsSaga)
}
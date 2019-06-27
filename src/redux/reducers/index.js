import githubReducer  from './github'
import alertReducer  from './alert'
import loading  from './loading'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    github : githubReducer,
    alert : alertReducer,
    loading : loading
  })

export default rootReducer

import githubReducer  from './github'
import alertReducer  from './alert'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    github : githubReducer,
    alert : alertReducer
  })

export default rootReducer

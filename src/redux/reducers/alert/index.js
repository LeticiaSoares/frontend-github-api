import { OPEN_ALERT, CLOSE_ALERT} from '../../actions/alert'

const alertReducer = (
    state = {},
    action
) => {
    switch (action.type) {
        case OPEN_ALERT:
            return Object.assign({}, state, {
                    ...action.payload
            })
        case CLOSE_ALERT:
            return {}
        default:
            return state
    }
}

export default alertReducer
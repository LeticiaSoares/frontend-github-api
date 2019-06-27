import React from 'react';
import {connect} from "react-redux";
import { Provider } from 'react-redux'
import store from './redux'
import {Route, Switch, withRouter} from 'react-router'
import SearchUser from './pages/seachUser'
import ListCommits from './pages/listCommits'
import Alert from './components/alert'
import { getAlertMessage } from './redux/selectors/alert'
import { alertActions } from './redux/actions/alert'
import { startMainSaga }  from './redux'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message : false,
        }
    }
    // componentDidMount() {
    //     startMainSaga()
    // }
    static getDerivedStateFromProps (props, state) {
        if (props.message !== state.message) {
            return {
                message :  props.message
            }
        }
        return {}
    }
    render(){
        return (
            <React.Fragment>
                <Switch>
                    <Route path='/:user/:repo/commits' component={ListCommits} />
                    <Route path='/' component={SearchUser} />
                </Switch>
                <Alert message={this.state.message} handleOnClick={this.props.closeAlert} >{this.state.message}</Alert>
            </React.Fragment>
       );
    }
}

const mapStateToProps = state => {
    return {
        message: getAlertMessage(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeAlert: () => dispatch(alertActions.closeAlert())
    }
}

export default withRouter(connect(() => mapStateToProps, mapDispatchToProps)(App))



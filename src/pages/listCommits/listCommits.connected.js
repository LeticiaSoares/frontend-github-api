import React from "react";
import {connect} from "react-redux";
import ListCommits from './listCommits'
import {startCommitSaga} from "../../redux";
import {SELECT_REPO} from "../../redux/actions/github";
import {getCommits} from "../../redux/selectors/commits";
import { withRouter } from "react-router";

const mapStateToProps = state => {
    return {
        commits: getCommits(state),
    }
}
const mapDispatchToProps = dispatch => ({
    onSelectedRepo (user,repo) {
        dispatch({
            type: SELECT_REPO,
            payload: {user,repo}
        })
    }
})

class ListCommitsConnected extends React.Component {
    componentDidMount() {
        startCommitSaga()
        const { user ,repo } = this.props.match.params
        this.props.onSelectedRepo(user,repo)
    }
    render(){
        return (
            <ListCommits {...this.props} />
        )
    }

}

export default withRouter (connect((state) =>
    mapStateToProps,
    mapDispatchToProps
)(ListCommitsConnected))
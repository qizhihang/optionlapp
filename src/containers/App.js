import React from 'react';
import { connect } from 'react-redux'
import { routerJump } from '../actions/routerJump'
import { makeGetCurrentPage } from '../selectors/appSelectors'
import { Link } from 'react-router-dom';
class App extends React.Component {

    render() {
        return (
            <div>
                
                <h1 onClick={() => this.props.routerJump('/kkkkk')}>hahha</h1>
                <h1>{'当前页面' + this.props.router.router}</h1>
            </div>
        );
    }
}


const makeMapStateToProps = () => {
    const getCurrentPage = makeGetCurrentPage()
    const mapStateToProps = (state) => (
        {
            router: getCurrentPage(state)
        }
    )
    return mapStateToProps
}

const mapDispatchToProps = dispatch => ({
    routerJump: (id, router) => dispatch(routerJump(id, router))
})

export default connect(makeMapStateToProps, mapDispatchToProps)(App)
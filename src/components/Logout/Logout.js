import {Redirect} from 'react-router-rom'
import {connect} from 'react-redux'
import React, {component} from 'react'
class Logout extends Component{
    componentDidMount(){
        this.props.logout()
    }
    render(){
        <Redirect to={'/'}/>
    }
}
function mapDispatchToProps(dispatch){
    return {
        logout:()=>dispatch(logout)
    }
}
export default connect(null,mappDispatchToProps)(Logout)
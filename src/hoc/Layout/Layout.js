import MenuToggle from '../../components/UI/MenuToggle/MenuToggle'
import React, {Component} from 'react'
import classes from './Layout.css'
import Drawer from '../../components/Navigation/Drawer/Drawer'

class Layout extends Component{
    state={
        menu:false
    }
    toggleMenuHandler=()=>{
        this.setState({
            menu:!this.state.menu
        })
    }
    menuCloseHandler=()=>{
        this.setState({
            menu:false
        })
    }
    render(){
        
        return (
            <div className={classes.Layout}>
                <Drawer onClose={this.menuCloseHandler} isOpen={this.state.menu} isAuthenticated={this.props.isAuthenticated}/>
                <MenuToggle onToggle={this.toggleMenuHandler} isOpen={this.state.menu}></MenuToggle>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        isAuthenticated:!!state.auth.token
    }
}
export default connect(mapStateToProps)(Layout)
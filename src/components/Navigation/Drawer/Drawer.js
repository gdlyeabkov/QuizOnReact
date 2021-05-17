import {NavLink} from 'react-router-dom'
import React,{Components} from 'react'
import classes from './Drawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
const links=[
    {
        to:'/',
        exact:true,
        label:'Список'
    },
    {
        to:'/auth',
        exact:false,
        label:'авторизация'
    },
    {
        to:'/quizcreator',
        exact:false,
        label:'создать тест'
    },
]
class Drawer extends Component{
    clickHandler=()=>{
        this.props.onClose()
    }
    renderLinks(link){
        return links.map((link,index)=>{
            return (
                <li key={index}>
                    <NavLink onClick={this.clickHandler} to={link.to} exact={link.exact} activeClassName={classes.active}>
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }
    render(){
        const cls=[classes.Drawer]
        if(!this.props.isOpen){
            cls.push(classes.close)
        }
        const links=[
            
    {
        to:'/',
        exact:true,
        label:'Список'
    },
    
        ]
        if(this.props.isAuthenticated){
            links.push(
                {
                    to:'/quizcreator',
                    exact:false,
                    label:'создать тест'
                },
                {
                    to:'/logout',
                    exact:false,
                    label:'выйти'
                }
            )
        }else{
            links.push(
                {
                    to:'/auth',
                    exact:false,
                    label:'авторизация'
                },
                
            )
        }
        return (
            <React.Fragment>
            <nav className={cls.join(' ')}>
                <ul>
                    {this.renderLinks(links)}
                </ul>
            </nav>
            {this.props.isOpen ? <Backdrop onClick={this.props.onClose}></Backdrop> : null} 
            </React.Fragment>
        )
    }
}
export default Drawer
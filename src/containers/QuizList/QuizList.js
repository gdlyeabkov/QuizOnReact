import Loader from '../../components/UI/Loader/Loader'
import axios from '../../axios/axios-quiz'
import classes from './QuizList.css'
import QuizList,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
class QuizList extends Component {
    renderQuizes(){
        return this.props.quizes.map((quiz)=>{

            return (
                <li key={quiz.id}>
                    <NavLink to={'/quiz/' + quiz.id}>
                        Тест {quiz.name}
                    </NavLink>
                </li>
            ) 
        })
    }
    componentDidMount(){
        this.props.fetchQuizes()
    }
    render(){
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>
                    {this.props.loading && this.props.quizes.length !== 0 ? <Loading></Loading> :

                    <ul>
                        {this.renderQuizes()}
                    </ul>}

                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        quizes:state.quiz.quizes,
        loading:state.quiz.loading
    }
}
function mapDispatchToProps(dispatch){
    return {
        fetchQuizes:()=>dispatch(fetchQuizes())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(QuizList)
import Loader from '../Loader/Loader'
import axios from '../../axios/axios-quiz'
import React, {Component} from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
class Quiz extends Component {
    onAnswerClickHandler=(answerId)=>{
        
    }
    isQuizFinished(){
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }
    retryHandler(){
        this.setState({
            activeQuestion:0,
            answerState:null,
            isFinished:false,
            results:{}
        })
    }
    componentWillUnmount(){
        this.props.retryQuiz()
    }

    async componentDidMount(){
        this.props.fetchQuizById(this.props.match.params.id)
    }
    render(){
        return (
            <div className={classes.Quiz}>
                
                <div className={classes.QuizWrapper}>
                <h1>ответьте на все вопросы</h1>
                {this.props.loading && this.props.quiz ? <Loader/> :
                this.props.isFinished 
                ? <FinishedQuiz onRetry={this.props.retryQuiz} results={this.props.results} quiz={this.props.quiz}/>
                : <ActiveQuiz state={this.props.answerState} answerNumber={this.props.activeQuestion + 1 } quizLength={this.props.quiz.length} answers={this.props.quiz[this.props.activeQuestion].answers} question={this.props.quiz[this.props.activeQuestion].question} onAnswerClick={this.props.onAnswerClickHandler}></ActiveQuiz>
                }
                
                    
                </div>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return {
        fetchQuizById:(id)=>dispatch(fetchQuizById(id)),
        quizAnswerClick:answerId=>dispatch(quizAnswerClick(answerId)),
        retryQuiz:()=>dispatch(retryQuiz())
    }
}
function mapStateToProps(state){
    return {
        results:state.quiz.results,
        isFinished:state.quiz.isFinished,
        activeQuestion:state.quiz.activeQuestion,
        answerState:state.quiz.answerState,
        quiz:state.quiz.quiz,
        loading:state.quiz.loading
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Quiz)

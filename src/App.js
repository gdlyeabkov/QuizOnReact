import Logout from './components/Logout/Logout'
import {connect} from 'react-redux'
import React from 'react';
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz.js'
import {Route,Switch,withRouter} from 'react-router-dom'
import QuizList from './containers/QuizList/QuizList.js'
import Auth from './containers/Auth/Auth.js'
import QuizCreator from './containers/QuizCreator/QuizCreator.js'
function App() {
  componentDidMount(){
    this.props.authLogin()
  }
 
  return (
    let routes = (
      <Switch>
      <Route path="/auth" component={Auth}></Route>
      <Route path="/quiz/:id" component={Quiz}></Route>
      <Route path="/" component={QuizList}></Route>
      <Redirect to="/"/>
      </Switch> 
    )
    <div className="App">
      if(this.props.isAuthenticated){
        routes=(
          <Switch>
            <Route path="/quiz/creator" component={QuizCreator}></Route>
            <Route path="/quiz/:id" component={Quiz}></Route>
            <Route path="/" exact component={QuizList}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Redirect to="/"/>
          </Switch> 
        )
      }
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

function mapStateToProps(state){
  return {
    isAuthenticated:!!state.auth.token
  }
}
function mapDispatchToProps(dispatch){
  return {
    authLogin:()=>dispatch(autoLogin)
  }
}
export default withRouter(connect(mapStateToProps)(App));

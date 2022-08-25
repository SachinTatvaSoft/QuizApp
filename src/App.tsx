import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Question1 from './Components/Question/Question1';
import Question2 from './Components/Question/Question2';
import Question3 from './Components/Question/Question3';
import Question4 from './Components/Question/Question4';
import Question5 from './Components/Question/Question5';
import QuestionPage from './Components/Question/QuestionPage';
import Result from './Components/Result/Result';
import UserDetails from './Components/UserDetails/UserDetails';

function App() {
  const [userDetails,setUserDetails] = useState({
    name:"",
    email:"",
    gender:"",
    language:""
})

const [answerCount,setAnswerCount] = useState({
  correct:0,wrong:0
})

const[answeredQuestions,setAnsweredQuestions] = useState([0])

const [question1,setQuestion1] = useState("")
const [question2,setQuestion2] = useState("")
const [question3,setQuestion3] = useState("")
const [question4,setQuestion4] = useState({uttarPradesh:false,gujarat:false,toronto:false,goa:false})
const [question5,setQuestion5] = useState("")


  return (
    <div className='quiz-app-container'>
      <div className='quiz-app'>
      <Routes>
        <Route path='' element={<UserDetails userDetails={userDetails} setUserDetails={setUserDetails}/>}/>
        <Route path='question/*' element={<QuestionPage userDetails={userDetails} answeredQuestions={answeredQuestions}/>}>
        <Route path='1' element={<Question1 answerCount={answerCount} setAnswerCount={setAnswerCount} question1={question1} setQuestion1={setQuestion1} answeredQuestions={answeredQuestions} setAnsweredQuestions={setAnsweredQuestions} />}/>
        <Route path='2' element={<Question2 answerCount={answerCount} setAnswerCount={setAnswerCount} question2={question2} setQuestion2={setQuestion2} answeredQuestions={answeredQuestions} setAnsweredQuestions={setAnsweredQuestions}/>}/>
        <Route path='3' element={<Question3 answerCount={answerCount} setAnswerCount={setAnswerCount} question3={question3} setQuestion3={setQuestion3} answeredQuestions={answeredQuestions} setAnsweredQuestions={setAnsweredQuestions}/>}/>
        <Route path='4' element={<Question4 answerCount={answerCount} setAnswerCount={setAnswerCount} question4={question4} setQuestion4={setQuestion4} answeredQuestions={answeredQuestions} setAnsweredQuestions={setAnsweredQuestions}/>}/>
        <Route path='5' element={<Question5 answerCount={answerCount} setAnswerCount={setAnswerCount} question5={question5} setQuestion5={setQuestion5} answeredQuestions={answeredQuestions} setAnsweredQuestions={setAnsweredQuestions}/>}/>
        </Route>
        <Route path='results' element={<Result answerCount={answerCount} userDetails={userDetails} />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;

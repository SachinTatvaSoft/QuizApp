import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);


type resultPropTypes = {
    answerCount: { correct: number; wrong: number; };
    userDetails: { name: string; email: string; gender: string; language: string;}
}

function Result(props:resultPropTypes){
    const {answerCount,userDetails} =  props

    const history = useNavigate()

    useEffect(()=>{
        if(userDetails?.name?.trim() === ''){
            history("/")
        }
    },[])

    const data = {
        labels: ['Correct Answer Percentage','Wrong Answer Percentage'],
        datasets: [
          {
            data: [answerCount?.correct*100/5,answerCount?.wrong*100/5],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ], 
      };

return <div className="user-details-form-container"> 
<div>
    <div className="result-answer-container welcome-message m-1">
    <h1>{userDetails?.name}'s Result</h1>
    </div>
    <div className="result-answer-container">
    <h3 className="m-1">Correct Answers : {answerCount?.correct}</h3>
    <h3 className="m-1">Wrong Answers : {answerCount?.wrong}</h3>
    </div>
    <div className="result-answer-container">
    <h2>You got : {answerCount?.correct*100/5}%</h2>
    </div>

    <div className="pie-chart-container">
     <Pie data={data}/>
    </div>
</div>
</div>
}

export default Result
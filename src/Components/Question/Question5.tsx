import React from "react";
import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";

type questionPropType = {
    answerCount: { correct: number; wrong: number; };
    question5:string;
    answeredQuestions: number[]
    setAnsweredQuestions: React.Dispatch<React.SetStateAction<number[]>>
    setQuestion5: React.Dispatch<React.SetStateAction<string>>
    setAnswerCount: React.Dispatch<React.SetStateAction<{
        correct: number;
        wrong: number;
    }>>
}

function Question5(props:questionPropType){
    const {question5,answerCount,answeredQuestions} = props || {}
    const history = useNavigate()

    const handlePreviousQuestion = () =>{
        history('/question/4')
    }

    const handleNextQuestion = () =>  {
        if(question5 === "elon musk"){
            if(answerCount?.correct == 5 && answerCount?.wrong == 0){
                history('/results')
                return ;
                }
            props?.setAnswerCount({...answerCount,correct:answerCount.correct + 1,wrong:answerCount?.wrong - 1})

        } else if(answerCount?.wrong<5){
            props?.setAnswerCount({...answerCount,wrong:answerCount.wrong + 1,correct:answerCount?.correct -1 })            
        }
        history('/results')
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        props?.setQuestion5(e?.target?.value);
        props?.setAnsweredQuestions([...answeredQuestions,5])
    }
    
    return <div className="user-details-form-container">
    <div className="question-container">
        <h3>Question No. 5</h3>
        <h1>Who is the CEO of Tesla Motors?</h1>
        <RadioGroup
         aria-labelledby="demo-radio-buttons-group-label"
         defaultValue="male"
         name="radio-buttons-group"
         value={question5}
         onChange={handleChange}
        >
            <FormControlLabel value="bill gates" control={<Radio />} label="Bill Gates" />
            <FormControlLabel value="elon musk" control={<Radio />} label="Elon Musk" />
            <FormControlLabel value="larry page" control={<Radio />} label="Larry Page" />
            <FormControlLabel value="steve jobs" control={<Radio />} label="Steve Jobs" />
        </RadioGroup>
        <Button variant="outlined" className="m-1" onClick={handlePreviousQuestion}>Previous</Button>
        <Button variant="outlined" className="m-1" onClick={handleNextQuestion}>End Test</Button>
    </div>
</div>
}

export default Question5

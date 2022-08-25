import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

type questionPropType = {
    answerCount: { correct: number; wrong: number; };
    question1:string;
    answeredQuestions: number[]
    setAnsweredQuestions: React.Dispatch<React.SetStateAction<number[]>>
    setQuestion1: React.Dispatch<React.SetStateAction<string>>;
    setAnswerCount: React.Dispatch<React.SetStateAction<{
        correct: number;
        wrong: number;
    }>>

}

function Question1(props:questionPropType){
    const {question1,answerCount,answeredQuestions} = props || {}
    const history = useNavigate()
    const handleNextQuestion = () =>  {
        if(question1 === "delhi"){
            props?.setAnswerCount({...answerCount,correct:answerCount.correct + 1})
            history('/question/2')
        } else{
            props?.setAnswerCount({...answerCount,wrong:answerCount.wrong + 1})
            history('/question/2')
        }
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        props?.setQuestion1(e?.target?.value);
        props?.setAnsweredQuestions([...answeredQuestions,1])
    }

    return (
    <div>
        <h1>What is the capital of india?</h1>
        
            <RadioGroup
             aria-labelledby="demo-radio-buttons-group-label"
             defaultValue="male"
             name="radio-buttons-group"
             value={question1}
             onChange={handleChange}
            >
                <FormControlLabel value="gujarat" control={<Radio />} label="Gujarat" />
                <FormControlLabel value="delhi" control={<Radio />} label="Delhi" />
                <FormControlLabel value="goa" control={<Radio />} label="Goa" />
                <FormControlLabel value="haryana" control={<Radio />} label="Haryana" />
            </RadioGroup>

            <Button variant="outlined" onClick={handleNextQuestion}>Next</Button>
    </div>
)

}

export default Question1
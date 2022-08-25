import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

type questionPropType = {
    answerCount: { correct: number; wrong: number; };
    question3:string;
    answeredQuestions: number[]
    setAnsweredQuestions: React.Dispatch<React.SetStateAction<number[]>>
    setQuestion3: React.Dispatch<React.SetStateAction<string>>
    setAnswerCount: React.Dispatch<React.SetStateAction<{
        correct: number;
        wrong: number;
    }>>
}

function Question3(props:questionPropType){
    const {question3,answerCount,answeredQuestions} = props || {}

    const history = useNavigate()

    const handlePreviousQuestion = () =>{
        history('/question/2')
    }

    const handleNextQuestion = () =>  {
        if(question3 === "false"){
            if(answerCount?.correct+answerCount?.wrong < 5){
                props?.setAnswerCount({...answerCount,correct:answerCount.correct + 1})
            }
            history('/question/4')
        } else{
            if(answerCount?.correct+answerCount?.wrong < 5){
                props?.setAnswerCount({...answerCount,wrong:answerCount.wrong + 1})
            }
            history('/question/4')
        }
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        props?.setQuestion3(e?.target?.value);
        props?.setAnsweredQuestions([...answeredQuestions,3])
    }

    return <div className="user-details-form-container">
    <div>
    <h1>Following statement is true or false?</h1>
    <h2>Sun rise in west.</h2>
    
        <RadioGroup
         aria-labelledby="demo-radio-buttons-group-label"
         defaultValue="male"
         name="radio-buttons-group"
         value={question3}
         onChange={handleChange}
        >
            <FormControlLabel value="true" control={<Radio />} label="True" />
            <FormControlLabel value="false" control={<Radio />} label="False" />
        </RadioGroup>

        <Button variant="outlined" className="m-1" onClick={handlePreviousQuestion}>Previous</Button>
        <Button variant="outlined" className="m-1" onClick={handleNextQuestion}>Next</Button>

</div>
</div>
}

export default Question3
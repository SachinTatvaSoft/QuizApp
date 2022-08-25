import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

type questionPropType = {
    answerCount: { correct: number; wrong: number; };
    question4: {
        uttarPradesh: boolean;
        gujarat: boolean;
        toronto: boolean;
        goa: boolean;
    }
    answeredQuestions: number[]
    setAnsweredQuestions: React.Dispatch<React.SetStateAction<number[]>>
    setQuestion4: React.Dispatch<React.SetStateAction<{
        uttarPradesh: boolean;
        gujarat: boolean;
        toronto: boolean;
        goa: boolean;
    }>>
    setAnswerCount: React.Dispatch<React.SetStateAction<{
        correct: number;
        wrong: number;
    }>>

}

function Question4(props:questionPropType){
    const {question4,answerCount,answeredQuestions} = props || {}

    const history = useNavigate()

    const handlePreviousQuestion = () =>{
        history('/question/3')
    }

    const handleNextQuestion = () =>  {
        const {uttarPradesh,goa,gujarat} = question4
        if(uttarPradesh && goa && gujarat){
            props?.setAnswerCount({...answerCount,correct:answerCount.correct + 1})
            history('/question/5')
        } else {
            props?.setAnswerCount({...answerCount,wrong:answerCount.wrong + 1})
            history('/question/5')
        }
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        props?.setQuestion4({...question4,[e.target.name]:e.target.checked})
        props?.setAnsweredQuestions([...answeredQuestions,4])
    }

    return <div>
        <h2>Multi select question</h2>
        <h1>Which are the states of india?</h1>
    
    <FormGroup>
     <FormControlLabel control={<Checkbox checked={question4?.uttarPradesh} onChange={handleChange} name="uttarPradesh"/>} label="Uttar Pradesh" />
     <FormControlLabel control={<Checkbox checked={question4?.gujarat} onChange={handleChange} name="gujarat"/>} label="Gujarat" />
     <FormControlLabel control={<Checkbox checked={question4?.toronto} onChange={handleChange} name="toronto"/> } label="Toronto" />
     <FormControlLabel control={<Checkbox checked={question4?.goa} onChange={handleChange} name="goa"/>} label="Goa" />
    </FormGroup>

        <Button variant="outlined" onClick={handlePreviousQuestion}>Previous</Button>
        <Button variant="outlined" onClick={handleNextQuestion}>Next</Button>
        

</div>

}

export default Question4
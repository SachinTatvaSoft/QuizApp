import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

type questionPropType = {
    answerCount: { correct: number; wrong: number; };
    question2:string;
    answeredQuestions: number[]
    setAnsweredQuestions: React.Dispatch<React.SetStateAction<number[]>>
    setQuestion2: React.Dispatch<React.SetStateAction<string>>
    setAnswerCount: React.Dispatch<React.SetStateAction<{
        correct: number;
        wrong: number;
    }>>

}

function Question2(props:questionPropType){
    const {question2,answerCount,answeredQuestions} = props || {}

    const history = useNavigate()

    const handlePreviousQuestion = () =>{
        history('/question/1')
    }

    const handleNextQuestion = () =>  {
        if(question2 === "35"){
            props?.setAnswerCount({...answerCount,correct:answerCount.correct + 1})
            history('/question/3')
        } else{
            props?.setAnswerCount({...answerCount,wrong:answerCount.wrong + 1})
            history('/question/3')
        }
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        props?.setQuestion2(e.target.value);
        props?.setAnsweredQuestions([...answeredQuestions,2])
    }

    return (
        <div>
            <h1>Fill in the blank</h1>
        <h1>10 + 25 = <span><TextField value={question2} onChange={handleChange}/></span></h1>

            <Button variant="outlined" onClick={handlePreviousQuestion}>Previous</Button>
            <Button variant="outlined" onClick={handleNextQuestion}>Next</Button>
    
    </div>
    )

}

export default Question2
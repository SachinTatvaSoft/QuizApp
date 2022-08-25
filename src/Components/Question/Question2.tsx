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
            if(answerCount?.correct == 5 && answerCount?.wrong == 0){
                history('/question/3')
                return ;
                }
            props?.setAnswerCount({...answerCount,correct:answerCount.correct + 1,wrong:answerCount?.wrong - 1})
        } else if(answerCount?.wrong < 5){
            props?.setAnswerCount({...answerCount,wrong:answerCount.wrong + 1,correct:answerCount?.correct -1 })
        }
        history('/question/3')
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        props?.setQuestion2(e.target.value);
        props?.setAnsweredQuestions([...answeredQuestions,2])
    }

    return (
        <div className="user-details-form-container">
            <div className="question-container">
            <h3>Question No. 2</h3>
            <h1>Fill in the blank</h1>
            <h1>10 + 25 = <span><TextField value={question2} onChange={handleChange}/></span></h1>
            <Button variant="outlined" className="m-1" onClick={handlePreviousQuestion}>Previous</Button>
            <Button variant="outlined" className="m-1" onClick={handleNextQuestion}>Next</Button>
            </div>

    </div>
    )

}

export default Question2
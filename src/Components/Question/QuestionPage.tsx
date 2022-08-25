import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import QuestionNav from "./QuestionNav";

type questionPageProps = {
    answeredQuestions: number[]
    userDetails: { name: string; email: string; gender: string; language: string;}
}

function QuestionPage(props:questionPageProps){
    const {answeredQuestions,userDetails} = props || {}

    const history = useNavigate()

    useEffect(()=>{
        if(userDetails?.name?.trim() === ''){
            history("/")
        }
    },[])

    return <div>
        <QuestionNav answeredQuestions={answeredQuestions} userDetails={userDetails}/>
        <Outlet/>
    </div>

}

export default QuestionPage
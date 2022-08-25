import React from "react";
import { Link } from "react-router-dom";

type questionNav = {
    answeredQuestions: number[]
    userDetails: { name: string; email: string; gender: string; language: string;}
}


function QuestionNav(props:questionNav){
    const {answeredQuestions,userDetails} = props|| {}
    let questions = [1,2,3,4,5]
    return <div className="link-main-container m-1">
        <div className="link-container">
        {
            questions?.map((link)=>{
                return <Link to={`/question/${link}`} key={link}>
                    <span className={answeredQuestions?.includes(link) ? "answered-question" : ""}>{link}</span>
                </Link>
            })
        }
        </div>
        <h1>Welcome,{userDetails?.name}</h1>
    </div>

}

export default QuestionNav
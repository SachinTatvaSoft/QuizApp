import React from "react";
import { Link, useLocation } from "react-router-dom";

type questionNav = {
    answeredQuestions: number[]
    userDetails: { name: string; email: string; gender: string; language: string;}
}


function QuestionNav(props:questionNav){
    const {answeredQuestions,userDetails} = props|| {}
    const {pathname} = useLocation()   
    
    let questions = [1,2,3,4,5]
    return <div className="link-main-container m-1">
        <div className="link-container">
        {
            questions?.map((link)=>{
                return <Link to={`/question/${link}`} key={link}>
                    <span className={parseInt(pathname?.split("/")[2]) == link ? "selected-question" : answeredQuestions?.includes(link) ? "answered-question" : ""}>{link}</span>
                </Link>
            })
        }
        </div>
        <div className="welcome-message m-1">
        <h1>Welcome,{userDetails?.name}</h1>
        </div>
    </div>

}

export default QuestionNav
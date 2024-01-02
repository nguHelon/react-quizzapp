import React, { useState } from "react";
import { nanoid } from "nanoid"
import Answers from "./Answers.js";

const Quiz = ({ quizId, question, correctAns, incorrectAns, handleChoice }) => {
    let random = Math.floor(Math.random() * incorrectAns.length);
    incorrectAns.splice(random, 0, correctAns);
    let allAnswerBtns = incorrectAns.map((answer) => {
        return {
            id: nanoid(),
            answer: answer,
            isClicked: false
        }
    })

    const [answers, setAnswers] = useState(allAnswerBtns ? allAnswerBtns : []);

    function handleClick(id) {
        setAnswers(prevAnswers => {
            return prevAnswers.map((prevAnswer) => {
                if (prevAnswer.id === id) {
                    handleChoice(quizId, prevAnswer.answer)
                    return { ...prevAnswer, isClicked: !prevAnswer.isClicked }

                } else if (prevAnswer.isClicked === true) {
                    return { ...prevAnswer, isClicked: !prevAnswer.isClicked }
                } else {
                    return prevAnswer
                }
            })
        })
    }

    let answersBtn = answers.map((answer) => {
        return <Answers
            key={answer.id}
            answerId={answer.id}
            quizId={quizId}
            answer={answer.answer}
            handleChoice={handleChoice}
            isClicked={answer.isClicked}
            handleClick={handleClick}
        />
    })
    return (
        <div className="quiz">
            <p>{question}</p>
            <div className="answers">
                {answersBtn}
            </div>
            <hr />
        </div>
    )
}

export default Quiz;
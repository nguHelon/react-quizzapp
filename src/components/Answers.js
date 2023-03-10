import React from "react"

const Answers = ({ quizId, answerId, answer, handleClick, isClicked }) => {
    return (
        <button
            className="answer"
            onClick={() => {
                handleClick(answerId)
            }}
            style={{ backgroundColor: isClicked ? "#a4c7f4" : "transparent" }}
        >
            {answer}
        </button>
    )
}

export default Answers;
import React from "react"
import Answers from "./Answers";

const Quiz = () => {
    return (
        <div className="quiz">
            <p>How would one say goodbye in spanish</p>
            <div className="answers">
                <Answers />
                <Answers />
                <Answers />
                <Answers />
            </div>
            <hr />
        </div>
    )
}

export default Quiz;
import React from "react"
import Quiz from "./components/Quiz"
import "./App.css"

const App = () => {
    return (
        <div className="container">
            <div className="quiz-intro">
                <h1>Quizzical</h1>
                <p>Have fun answering some questions</p>
                <button className="Btn">Start Quiz</button>
            </div>
            <div className="quiz-container">
                <div className="quizes">
                    <Quiz />
                    <Quiz />
                    <Quiz />
                    <Quiz />
                    <Quiz />
                </div>
                <div className="score">
                    <p>You scored 2/5 correct answers</p>
                    <button className="Btn">Play again</button>
                </div>
            </div>
        </div>
    )
}

export default App;
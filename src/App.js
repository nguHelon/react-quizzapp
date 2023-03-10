import React, { useState, useEffect } from "react"
import Quiz from "./components/Quiz"
import "./App.css"

const App = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [play, setPlay] = useState(false);
    const [score, setScore] = useState(0)
    const [endGame, setEndGame] = useState(false);
    const [markedAnswers, setMarkedAnswers] = useState([])

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(Response => Response.json())
            .then((data) => {
                if (play) {
                    let alldata = data.results.map((result, index) => {
                        return {
                            ...result,
                            id: index,
                            isChoosed: false
                        }
                    })

                    setQuizzes(alldata);
                } else {
                    setQuizzes([]);
                }
            }
            );
    }, [play]);

    function handlePlay() {
        setPlay(prevPlay => !prevPlay);
    }

    function handleChoices(quizId, prevAnswer) {
        setQuizzes(prevQuizzes => {
            return prevQuizzes.map(quiz => {
                if (quiz.id === quizId) {
                    if (quiz.correct_answer === prevAnswer) {
                        return { ...quiz, isChoosed: true }
                    } else {
                        return { ...quiz, isChoosed: false }
                    }
                } else {
                    return quiz;
                }
            })
        })

    }

    function handleGame() {

        setMarkedAnswers(() => {
            console.log("hello");
            return quizzes.map(quiz => {
                return {
                    quizId: quiz.id,
                    answerState: quiz.isChoosed,
                    correctAnswer: quiz.isChoosed ? 1 : 0
                }
            })
        })

        setScore(prevScore => {
            let scores = markedAnswers.map((ans) => ans.correctAnswer);
            console.log(scores)
            console.log(markedAnswers)
            for (let i = 0; i < scores.length; i++) {
                prevScore += scores[i];
            }
            console.log(prevScore)
            return prevScore;
        })
        setEndGame(prevGame => !prevGame);
    }

    console.log(quizzes)


    let newQuizzes = quizzes.map(quiz => {

        return <Quiz
            key={quiz.id}
            quizId={quiz.id}
            correctAns={quiz.correct_answer}
            incorrectAns={quiz.incorrect_answers}
            question={quiz.question}
            isChoosed={quiz.isChoosed}
            handleChoice={handleChoices}
        />
    })

    return (
        <div className="container" style={{ height: play ? "100%" : "100vh" }}>
            {play ?
                <div className="quiz-container">
                    <div className="quizes">
                        {newQuizzes}
                    </div>
                    <div className="score">
                        {endGame && <p>You scored {score}/5 correct answers</p>}
                        <button className="Btn" onClick={handleGame}>{endGame ? "Play Again" : "Check Answers"}</button>
                    </div>
                </div>
                :
                <div className="quiz-intro">
                    <h1>Quizzical</h1>
                    <p>Have fun answering some questions</p>
                    <button
                        className="Btn"
                        onClick={handlePlay}
                    >
                        Start Quiz
                    </button>
                </div>
            }
        </div>
    )
}

export default App;
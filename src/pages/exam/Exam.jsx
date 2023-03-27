import {React, useState} from 'react'
import "./exam.css"
import questions from "../../data/Questions"



export default function Exam() {



const [currentQuestion, setCurrentQuestion] = useState(0);

const [showScore, setShowScore] = useState(false);


const refreshPage = () =>window.location.reload()

const [score, setScore] = useState(0);

const handleAnswerButtonClick = (isCorrect) => {
	if (isCorrect===true) {
		setScore(score + 1);
        
	} 

        
    

	const nextQuestion = currentQuestion + 1;
	if(nextQuestion < questions.length) {
		setCurrentQuestion(nextQuestion);
	} else {
		setShowScore(true);
	}
};





	return (
        <>
        <div className="examTitle">QUIZ</div>
		<div className='exam'>
      {showScore ? (
				<div className='score-section examScore'>
                    <div className="examScoreBox">
                    Sonuç : {score} / {questions.length}</div>
                      <button onClick={refreshPage} className="examRetryButton">Retry</button>
                    
                    </div>
                    
			) : (
				<>
                <div className="examSection">
                    <div className="examCount">
                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                    </div>

                    <div className='question-text examText'>{questions[currentQuestion].questionText}</div>
                    <div className='answer-section examAnswer'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
						<button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)} className="examButton">{answerOption.answerText}</button>))}
					</div>

                </div>


					
						
                       
                        
                    

					

                    </>


				
			)}
          
		</div>
        
        </>
	);
}





    
    










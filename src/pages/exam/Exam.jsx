import {React, useState} from 'react'
import "./exam.css"


export default function Exam() {


 

//   return (
//     <>
//     <div className='examTitle'>Exam</div>
//     <div className='exam'>

//     </div>

//     </>
//   )
// }



	const questions = [
		{
			questionText: 'What is the meaning of this kanji 百?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '10', isCorrect: false },
				{ answerText: '100', isCorrect: true },
				{ answerText: '1000', isCorrect: false },
			],
		},
		{
			questionText: 'What is the meaning of this kanji 日?',
			answerOptions: [
				{ answerText: 'Coin', isCorrect: false },
				{ answerText: 'Sun', isCorrect: true },
				{ answerText: 'Land', isCorrect: false },
				{ answerText: 'Country', isCorrect: false },
			],
		},
		{
			questionText: 'What is the meaning of this kanji 時?',
			answerOptions: [
				{ answerText: 'Time', isCorrect: true },
				{ answerText: 'Temple', isCorrect: false },
				{ answerText: 'Wait', isCorrect: false },
				{ answerText: 'Hold', isCorrect: false },
			],
		},
		{
			questionText: 'What is the meaning of this kanji 人?',
			answerOptions: [
				{ answerText: 'Tree', isCorrect: false },
				{ answerText: 'Big', isCorrect: false },
				{ answerText: 'Heaven', isCorrect: false },
				{ answerText: 'Human', isCorrect: true },
			],
		},
	];

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
		<div className='exam'>
      {showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
						<button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>))}
					</div>

                    </>


				
			)}
            <button onClick={refreshPage}>Retry</button>
		</div>
        
        </>
	);
}








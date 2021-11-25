import './App.css';
import getData from './providers/fetch.js';
import { useEffect, useState } from 'react';
import BarChart from "./components/BarChart";

function Quiz() {
    const questions = [
		{
			questionText: 'Welk nummer heeft de meeste luisteraars?',
			answerOptions: [
				{ answerText: 'Creep', isCorrect: false },
				{ answerText: 'Sterrenstof', isCorrect: false },
				{ answerText: 'Seven Nation Army', isCorrect: false },
				{ answerText: 'Wonderwall', isCorrect: true },
			],
		},
		{
			questionText: 'Welk nummer duurt het langst?',
			answerOptions: [
				{ answerText: 'Sterrenstof', isCorrect: false },
				{ answerText: 'Under the Bridge', isCorrect: false },
				{ answerText: 'Sultans of Swing', isCorrect: true },
				{ answerText: 'Come as You Are', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Je hebt {score} van de {questions.length} vragen goed.
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Vraag {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Quiz;

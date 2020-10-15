import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the name of Name of Dunder Mifflins anual award show?',
			answerOptions: [
				{ answerText: 'The Grammys', isCorrect: false },
				{ answerText: 'Scotts Tots', isCorrect: false },
				{ answerText: 'The Dundies', isCorrect: true },
				{ answerText: 'The Oscars', isCorrect: false },
			],
		},
		{
			questionText: 'Who is Jans assistant?',
			answerOptions: [
				{ answerText: 'Jeff ', isCorrect: false },
				{ answerText: 'Hunter', isCorrect: true },
				{ answerText: 'Bill ', isCorrect: false },
				{ answerText: 'Tony ', isCorrect: false },
			],
		},
		{
			questionText: 'Where did Jan and Michael go on vacation?',
			answerOptions: [
				{ answerText: 'Jamaica', isCorrect: true },
				{ answerText: 'Cuba', isCorrect: false },
				{ answerText: 'Hawaii', isCorrect: false },
				{ answerText: 'Ireland', isCorrect: false },
			],
		},
		{
			questionText: 'What is Jim’s first prank on Dwight?',
			answerOptions: [
				{ answerText: 'Wired all his calls to his Bluetooth', isCorrect: false },
				{ answerText: 'Wrap his desk in Christmas paper', isCorrect: false },
				{ answerText: 'Impersonates him', isCorrect: false },
				{ answerText: 'Puts his supplies in Jello', isCorrect: true },
			],
		},
		{
			questionText: 'Where did Jim propose to Pam?',
			answerOptions: [
				{ answerText: 'Where they first met', isCorrect: false },
				{ answerText: 'A gas station', isCorrect: true },
				{ answerText: 'Outside of Dunder Mifflin', isCorrect: false },
				{ answerText: 'Tobys going away party', isCorrect: false },
			],
		},
		{
			questionText: 'What is Dwights cousins name?',
			answerOptions: [
				{ answerText: 'Moses', isCorrect: false },
				{ answerText: 'Earl', isCorrect: false },
				{ answerText: 'Vance', isCorrect: false },
				{ answerText: 'Mose', isCorrect: true },
			],
		},
		{
			questionText: 'What does Creed sprout at his desk?',
			answerOptions: [
				{ answerText: 'Bean Sprouts', isCorrect: false },
				{ answerText: 'Mung Beans', isCorrect: true },
				{ answerText: 'Barley', isCorrect: false },
				{ answerText: 'Millet', isCorrect: false },
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
					You scored {score} out of {questions.length}
				</div>
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
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
import React, { useState } from 'react';
import InputAnswer from './components/InputAnswer';
import TextAnswer from './components/TextAnswer';
import RadioAnswer from './components/RadioAnswer';
import CheckAnswer from './components/CheckAnswer';
import CircularProgressWithLabel from './components/CircularProgressWithLabel';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

export default function App() {
	const [progress, setProgress] = useState(0);
	const [questions, setQuestions] = useState([
		{
			questionText: 'What\'s your name?',
			type: 'input',
			answer: '',
		},
		{
			questionText: 'Enter a brief description of your working history.',
			type: 'text',
			answer: '',
		},
		{
			questionText: 'What is the capital of France?',
			type: 'radio',
			answerOptions: [
				{ answerText: 'New York', value: 1 },
				{ answerText: 'London', value: 2 },
				{ answerText: 'Paris', value: 3 },
				{ answerText: 'Dublin', value: 4 },
			],
			answer: 0,
		},
		{
			questionText: 'What are your major skills?',
			type: 'multi',
			answerOptions: [
				{ answerText: 'React', name: "react" },
				{ answerText: 'Vue', name: "vue" },
				{ answerText: 'Angular', name: "angular" },
				{ answerText: 'Ruby on Rails', name: "rails" },
				{ answerText: 'Django', name: "django" },
			],
			answer: { react: false, vue: false, angular: false, rails: false, django: false },
		},
	]);

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [isSet, setIsSet] = useState(false);
	const [isComplete, setIsComplete] = useState(false);

	const handleInputAnswer = (param) => {

		let newQuestions = [...questions];
		let val = param.target.value;
		newQuestions[currentQuestion].answer = val;

		setQuestions(newQuestions);

		if (val) {
			setIsSet(true);
		} else {
			setIsSet(false);
		}
	};

	const handleTextAnswer = (param) => {

		let newQuestions = [...questions];
		let val = param.target.value;
		newQuestions[currentQuestion].answer = val;

		setQuestions(newQuestions);

		if (val) {
			setIsSet(true);
		} else {
			setIsSet(false);
		}
	};

	const handleRadioAnswer = (event) => {

		let newQuestions = [...questions];
		newQuestions[currentQuestion].answer = event.target.value;

		setQuestions(newQuestions);

		let answer = newQuestions[currentQuestion].answer;
		if (answer !== 0) {
			setIsSet(true);
		} else {
			setIsSet(false);
		}
	};

	const handleCheckAnswer = (event) => {

		let newQuestions = [...questions];
		newQuestions[currentQuestion].answer[event.target.name] = event.target.checked;

		setQuestions(newQuestions);
	};

	const handleNext = () => {
		const nextQuestion = currentQuestion + 1;
		setProgress(nextQuestion * 25);
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
			let type = questions[nextQuestion].type;
			if (type === "input" || type === "text") {
				if (questions[nextQuestion].answer !== '') {
					setIsSet(true);
				} else {
					setIsSet(false);
				}
			} else if (type === "radio") {
				if (questions[nextQuestion].answer !== 0) {
					setIsSet(true);
				} else {
					setIsSet(false);
				}
			} else {
				setIsSet(true);
			}
		} else {
		}
	}

	const handlePrev = () => {
		const prevQuestion = currentQuestion - 1;
		setProgress(prevQuestion * 25);
		if (prevQuestion >= 0) {
			setCurrentQuestion(prevQuestion);
			let type = questions[currentQuestion].type;
			if (type === "input" || type === "text") {
				if (questions[prevQuestion].answer !== '') {
					setIsSet(true);
				} else {
					setIsSet(false);
				}
			} else if (type === "radio") {
				if (questions[prevQuestion].answer !== 0) {
					setIsSet(true);
				} else {
					setIsSet(false);
				}
			}
		} else {
		}
	}

	const handleComplete = () => {
		setProgress(100);
		setIsComplete(true);
	}

	return (
		<MDBContainer>
			<MDBRow>
				<MDBCol className="margin-auto mt-3">
					<MDBCard className="col-tb">
						<MDBCardBody className="mx-4">
							<div>
								<h3 className="dark-grey-text mb-5 text-center">
									<strong>{questions[currentQuestion].questionText}</strong>
								</h3>
							</div>
							<CircularProgressWithLabel
								progress={progress}
								current={currentQuestion + 1}
								total={questions.length}
							/>
							{
								(questions[currentQuestion].type === "input") ?
									<InputAnswer
										question={questions[currentQuestion]}
										onAnswer={handleInputAnswer}
									/>
									: (questions[currentQuestion].type === "text") ?
										<TextAnswer
											question={questions[currentQuestion]}
											onAnswer={handleTextAnswer}
										/>
										: (questions[currentQuestion].type === "radio") ?
											<RadioAnswer
												question={questions[currentQuestion]}
												onAnswer={handleRadioAnswer}
											/>
											: <CheckAnswer
												question={questions[currentQuestion]}
												onAnswer={handleCheckAnswer}
											/>
							}

							{isSet && (currentQuestion === questions.length - 1) ?
								<div className="text-center mb-3">
									<MDBBtn
										type="button"
										gradient="blue"
										rounded
										className="btn-block z-depth-1a"
										onClick={handleComplete}
									>
										Complete
									</MDBBtn>
								</div>
								: isSet && (currentQuestion !== questions.length - 1) ?
									<div className="text-center mb-3">
										<MDBBtn
											type="button"
											gradient="blue"
											rounded
											className="btn-block z-depth-1a"
											onClick={handleNext}
										>
											Next Question 
											<MDBIcon className="ml-2" icon="arrow-right" />
										</MDBBtn>
									</div>
									: ''
							}
						</MDBCardBody>
						<MDBModalFooter className="mx-5 pt-3 mb-1">
							{(currentQuestion !== 0 && !isComplete) ?
								<p className="d-flex prev-button cursor-pointer" onClick={handlePrev}>
									<MDBIcon icon="arrow-left" />
								</p>
								: ''
							}

							<p className="font-small grey-text d-flex quiz-number">
								<span>Question {currentQuestion + 1}</span>/{questions.length}
							</p>
						</MDBModalFooter>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
}

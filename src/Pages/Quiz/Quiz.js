
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import questions from "../../Components/Data/Data";
import Score from "../Score/Score";
import './Quiz.css'


function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(240);
  const[showResults, setShowResults] = useState(false);
  const navigate = useNavigate()


  
  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (timeLeft > 0) {
      setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else{
      toast.error("Time's up!!", {
        position: toast.POSITION.TOP_CENTER,
        onClose:() => navigate('/')



      })
      setShowResults(true);
    }
  }, [timeLeft]);


  function handleAnswer(answer) {
    if (answer === currentQuestion.answer) {
      setScore(score + 1);
    }
  }

  function handleSubmit() {
    if(timeLeft <= 0) {
      toast.error("Time's up!!", {
        position: toast.POSITION.TOP_CENTER ,
        onClose:() => navigate('/')
 


      });
      return;

      
    }
    if (selectedOption) {
      handleAnswer(selectedOption)
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    }
    else {
      toast.info("Please select an option before submitting", {
        position: toast.POSITION.TOP_CENTER
      });

    }
  }


  function handlePrev(){
    if(timeLeft <= 0) {
      toast.error("Time's up!!", {
        position: toast.POSITION.TOP_CENTER,
        onClose:() => navigate('/')

      });
      return; 
    }
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setSelectedOption(null);
  }
  



  return (
    
    <div >
              <ToastContainer/>
              
               { showResults? (
                <div className="result-page">
                    <h2>Result</h2>
                    <p>You scored: {score} out of {questions.length}</p>
                    {/* <Score score={score} /> */}
              </div>
                ) : (
              
<>
      <div  className="main">
      <div className="quiz-title">
      {/* <h1>Quiz</h1> */}
      <span>Question {currentQuestionIndex + 1} out of {questions.length}</span>
      <div>
 
        <p>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? "0" + timeLeft % 60 : timeLeft % 60}</p>
  
 
        </div>
        </div>
  <p className="question"> <span className="number">{currentQuestionIndex + 1}. </span> <span></span>  {currentQuestion.question}</p>
  {currentQuestion.options.map((option, index) => (
    <div key={option} className="answers">
      <input type="radio" id={`option-${index}`} name="option" value={option} onChange={(e) => setSelectedOption(e.target.value)}/>
      <label htmlFor={`option-${index}`}>   { option}</label>
    </div>
  ))}
</div>

     <div className="buttons">
      { currentQuestionIndex > 0 ? 
        <button className="prev" onClick={handlePrev}>prev</button> 
        : null
      }
      { currentQuestionIndex < questions.length - 1 ?
        <button onClick={handleSubmit} className="next"> Next</button> 
: <button  className="submitbtn" onClick={() => setShowResults(true)}>Submit</button>

      



      }
      </div>
                   
                </>    
)}
    </div>

                
  
    );
}

export default Quiz;



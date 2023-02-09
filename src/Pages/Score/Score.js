import questions from "../../Components/Data/Data";
import './Score.css'

const Score = (props) => {
    return ( 
        <div className="page">
            <h2>Result</h2>
            <p>you scored  : {props.score} out of {props.questions.length}</p>
        </div>
     );
}
 
export default Score ;
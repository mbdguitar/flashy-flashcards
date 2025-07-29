import styles from '../modules/QuestionMenu.module.css';
import button_back from "../images/svg/button_back.svg";
import button_next from "../images/svg/button_next.svg";

function QuestionMenu() {
    return (
        <div className={styles.question_menu}>
            <button aria-label="Next Question">
                <img src={button_back} alt="previous question"/>
            </button>
            <p>1 | 3</p>
            <button aria-label="Previous Question">
                <img src={button_next} alt="next"/>
            </button>
        </div>
    )
}

export default QuestionMenu;
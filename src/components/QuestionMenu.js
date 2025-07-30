import { useSelector, useDispatch } from 'react-redux';
import styles from '../modules/QuestionMenu.module.css';
import button_back from "../images/svg/button_back.svg";
import button_next from "../images/svg/button_next.svg";
import { setCurrentFlashcard } from '../features/currentFlashcard/currentFlashcardSlice';

function QuestionMenu() {
    const stacks = useSelector((state) => state.stacks);
    const currentStackId = useSelector((state) => state.currentStack);
    const currentFlashcardId = useSelector((state) => state.currentFlashcard);
    const allFlashcards = stacks.byId[currentStackId].flashcards;
    const currentFlashcard = allFlashcards.find((card) => card.id === currentFlashcardId);
    const currentFlashcardIndex = allFlashcards.indexOf(currentFlashcard);
    const dispatch = useDispatch();

    function handlePreviousQuestion() {
        if (currentFlashcardIndex > 0) {
            dispatch(setCurrentFlashcard(allFlashcards[currentFlashcardIndex - 1].id));
        }
    }

    function handleNextQuestion() {
        if (currentFlashcardIndex < allFlashcards.length - 1) {
            dispatch(setCurrentFlashcard(allFlashcards[currentFlashcardIndex + 1].id));
        }
    }

    return (
        <div className={styles.question_menu}>
            <button aria-label="Previous Question" onClick={handlePreviousQuestion}>
                <img src={button_back} alt="previous question" width='50'/>
            </button>
            <p>{`${currentFlashcardIndex + 1} | ${allFlashcards.length}`}</p>
            <button aria-label="Next Question" onClick={handleNextQuestion}>
                <img src={button_next} alt="next question" width='50'/>
            </button>
        </div>
    )
}

export default QuestionMenu;
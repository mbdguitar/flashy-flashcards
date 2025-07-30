import { useSelector } from 'react-redux';
import styles from '../modules/Flashcard.module.css';

function Flashcard() {
    const stacks = useSelector((state) => state.stacks);
    const currentStackId = useSelector((state) => state.currentStack)
    const currentFlashcardId = useSelector((state) => state.currentFlashcard);
    const currentFlashcard = stacks.byId[currentStackId].flashcards.find((card) => card.id === currentFlashcardId);

    return (
        <div className={styles.flashcard}>
            {currentFlashcard ? <h1>{currentFlashcard.title}</h1> : null}
            {currentFlashcard ? <p>{currentFlashcard.text}</p> : null}
        </div>
    );
}

export default Flashcard;
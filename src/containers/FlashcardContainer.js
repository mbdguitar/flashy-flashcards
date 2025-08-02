
import { useSelector } from 'react-redux';
import Flashcard from "../components/Flashcard";
import QuestionMenu from "../components/QuestionMenu";
import styles from "../modules/FlashcardContainer.module.css"

function FlashcardContainer() {
    //global state
    const stacks = useSelector((state) => state.stacks);
    const currentStackId = useSelector((state) => state.currentStack)
    const currentFlashcardId = useSelector((state) => state.currentFlashcard);
    const currentFlashcard = stacks.byId[currentStackId].flashcards.find((card) => card.id === currentFlashcardId);

    const defaultFlashcard = {
        id: 'default',
        title: 'Add a new flashcard',
        text: 'To add a new flashcard, click on the + button, select "add flashcard", and enter the information'
    };
    
    return (
        <div className={styles.flashcard_container}> 
            {currentFlashcard ? <Flashcard content={currentFlashcard} /> : <Flashcard content={defaultFlashcard} />}
            <QuestionMenu />
        </div>
        
    )
}

export default FlashcardContainer;
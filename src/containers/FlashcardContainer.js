import Flashcard from "../components/Flashcard";
import QuestionMenu from "../components/QuestionMenu";
import styles from "../modules/FlashcardContainer.module.css"

function FlashcardContainer() {
    return (
        <div className={styles.flashcard_container}>
            <Flashcard />
            <QuestionMenu />
        </div>
        
    )
}

export default FlashcardContainer;
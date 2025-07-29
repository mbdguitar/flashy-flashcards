import styles from '../modules/Flashcard.module.css';

function Flashcard() {
    const flashcardContent = {
        title: 'What does ‘TypeError’ mean in JavaScript?',
        content: 'In JavaScript, a TypeError signifies that an operation cannot be performed because the value involved is not of the expected or compatible type for that operation. It indicates a mismatch between the type of data being used and the operation being attempted'
    }
    return (
        <div className={styles.flashcard}>
            <h1>{flashcardContent.title}</h1>
            <p>{flashcardContent.content}</p>
        </div>
    );
}

export default Flashcard;
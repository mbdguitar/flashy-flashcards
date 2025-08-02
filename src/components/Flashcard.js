import { useState, useEffect } from 'react';
import styles from '../modules/Flashcard.module.css';

function Flashcard({ content }) {
    //local state
    const [ isCardSideFront, setIsCardSideFront ] = useState(true);

    useEffect(() => {
        setIsCardSideFront(true);
    }, [content])

    function toggleCardSide() {
        setIsCardSideFront(!isCardSideFront);
    }

    return (
        <div className={styles.flashcard} onClick={toggleCardSide}>
            {isCardSideFront ? <h1>{content.title}</h1> : <p>{content.text}</p>}
        </div>
    );
}

export default Flashcard;
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deactivateModal } from '../features/isModalActive/isModalActiveSlice';
import { resetModalMenuType } from '../features/modalMenuType/modalMenuTypeSlice';
import { createFlashcard } from '../features/stacks/stacksSlice';
import styles from '../modules/AddFlashcardModalMenu.module.css'
import { increaseFlashcardCounter } from '../features/counters/countersSlice';

function AddFlashcardModalMenu() {
    //local state
    const [ title, setTitle ] = useState('');
    const [ text, setText ] = useState('');

    //global state
    const dispatch = useDispatch();
    const flashcardCounter = useSelector((state) => state.counters.flashcardCounter);
    const stackId = useSelector((state) => state.currentStack);

    //deactivates the modal overlay
    function toggleModal() {
        dispatch(deactivateModal());
        dispatch(resetModalMenuType());
    }

    function handleSubmit(e) {
        e.preventDefault();
        const flashcard = 
        {
            stackId: stackId,
            flashcard: 
            {
                id: `${'fc' + flashcardCounter}`,
                title: title,
                text: text
            }
        }
        dispatch(createFlashcard(flashcard));
        dispatch(increaseFlashcardCounter());
        toggleModal()
    }

    return (
        <div className={styles.add_flashcard_modal}>
            <h2>Add Flashcard</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.flashcard_title_input}>
                    <label htmlFor="flashcard">Title</label>
                    <input id="flashcard_title" name="flashcard_title" type="text" placeholder="Enter title here" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div className={styles.flashcard_text_input}>
                    <label htmlFor='flashcard_text'>Text</label>
                    <textarea id="flashcard_text" name="flashcard_text" placeholder="Enter text here" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                </div>
                <input className={styles.submit_button} type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default AddFlashcardModalMenu;
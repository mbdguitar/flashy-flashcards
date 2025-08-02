import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseStackCounter } from '../features/counters/countersSlice';
import { createStack } from '../features/stacks/stacksSlice';
import { deactivateModal } from '../features/isModalActive/isModalActiveSlice';
import { resetModalMenuType } from '../features/modalMenuType/modalMenuTypeSlice';
import styles from '../modules/AddStackModalMenu.module.css';

function AddStackModalMenu() {
    //local state
    const [ name, setName ] = useState('');

    //global state
    const dispatch = useDispatch();
    const stackCounter = useSelector((state) => state.counters.stackCounter);

    //deactivates the modal overlay
    function toggleModal() {
        dispatch(deactivateModal());
        dispatch(resetModalMenuType());
    }


    function handleSubmit(e) {
        const defaultFlashcard = {id: 'default', title: "Add a new flashcard", text: "To add a new flashcard, click on the 'add' button, select 'add flashcard' and enter the content of the"}
        e.preventDefault()
        if (name) {
            const payload = {
            id: `${'stack' + stackCounter}`,
            name: name,
            flashcards: [defaultFlashcard]
        };
        dispatch(increaseStackCounter());
        dispatch(createStack(payload));
        toggleModal();
        }
    }

    return (
        <div className={styles.add_stack_modal}>
            <h2>Add Stack</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.stack_name_input}>
                    <label htmlFor="stack_title">Title</label>
                    <input id="stack_title" type="text" placeholder="Enter title here" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <input className={styles.submit_button} type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default AddStackModalMenu;
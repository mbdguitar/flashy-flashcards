import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseStackCounter } from '../features/counters/countersSlice';
import { createStack } from '../features/stacks/stacksSlice';
import { deactivateModal } from '../features/isModalActive/isModalActiveSlice';
import { resetModalMenuType } from '../features/modalMenuType/modalMenuTypeSlice';
import styles from '../modules/AddStackModalMenu.module.css';

function AddStackModalMenu() {
    //local state
    const [ title, setTitle ] = useState('');

    //global state
    const dispatch = useDispatch();
    const stackCounter = useSelector((state) => state.counters.stackCounter);

    //deactivates the modal overlay
    function toggleModal() {
        dispatch(deactivateModal());
        dispatch(resetModalMenuType());
    }


    function handleSubmit(e) {
        e.preventDefault()
        if (title) {
            const payload = {
            id: `${'stack' + stackCounter}`,
            name: title,
            flashcards: []
        };
        dispatch(increaseStackCounter());
        dispatch(createStack(payload));
        toggleModal();
        }
    }

    return (
        <div className={styles.add_stack_modal}>
            <button onClick={toggleModal}>X</button>
            <h2>Add Stack</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="stack_title">Title</label>
                <input id="stack_title" type="text" placeholder="Enter title here" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <input type="submit" value="add"/>
            </form>
        </div>
    )
}

export default AddStackModalMenu;
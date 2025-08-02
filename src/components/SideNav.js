import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentFlashcard } from '../features/currentFlashcard/currentFlashcardSlice';
import { setCurrentStack } from '../features/currentStack/currentStackSlice';
import AddButton from './AddButton';
import styles from '../modules/SideNav.module.css';

function SideNav() {
    const stacks = useSelector((state) => state.stacks);
    const currentStackId = useSelector((state) => state.currentStack);
    const currentStack = stacks.byId[currentStackId];
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentStack.flashcards.length > 0) {
            dispatch(setCurrentFlashcard(currentStack.flashcards[0].id))
        }
    }, [currentStackId, currentStack.flashcards, dispatch])

    return (
        <nav className={styles.sidenav}>
            <div className={styles.stack_container}>
                <form>
                    <select id='stack' name='stack' onChange={(e) => dispatch(setCurrentStack(e.target.value))}>
                        {stacks.allIds.map((id) => {
                            return (
                                <option value={id} key={id}>
                                    {stacks.byId[id].name}
                                </option>
                            )
                        })}
                    </select>
                </form>
                <AddButton />
            </div>
           <ul>
                {currentStack.flashcards.map((card) => {
                    return <li key={card.id}>
                        <button onClick={() => dispatch(setCurrentFlashcard(card.id))}>
                            <span>{card.title}</span>
                        </button>
                    </li>
                })}
            </ul> 
        </nav>
    )
}

export default SideNav;
import { useDispatch } from 'react-redux';
import { activateModal } from '../features/isModalActive/isModalActiveSlice';
import { setModalMenuType } from '../features/modalMenuType/modalMenuTypeSlice';
import styles from '../modules/ChoiceModalMenu.module.css';

function ChoiceModalMenu() {
    const dispatch = useDispatch();
    
    function handleModalDisplay (type) {
        dispatch(activateModal());
        dispatch(setModalMenuType(type));
    }

    return (
        <div className={styles.choice_menu}>
            <button onClick={() => handleModalDisplay('addStack')}>
                <span>Add Stack</span>
                <img src='../../images/svg/stack_icon.svg'/>
            </button>
            <button onClick={() => handleModalDisplay('addFlashcard')}>
                <span>Add Flashcard</span>
                <img src='../../images/svg/flashcard_icon.svg'/>
            </button>
        </div>
    )
}

export default ChoiceModalMenu;
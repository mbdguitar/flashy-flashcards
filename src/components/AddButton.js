import { useDispatch } from 'react-redux';
import { activateModal } from '../features/isModalActive/isModalActiveSlice';
import { setModalMenuType } from '../features/modalMenuType/modalMenuTypeSlice';
import styles from '../modules/AddButton.module.css'

function AddButton() {
    const dispatch = useDispatch();

    function handleModalDisplay (type) {
        dispatch(activateModal());
        dispatch(setModalMenuType(type));
    }

    return (
        <div className={styles.add_button} >
            <button onClick={() => handleModalDisplay('choiceMenu')}>
                +
            </button>
        </div>
    )
}

export default AddButton;
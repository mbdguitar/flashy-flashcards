import { useDispatch } from 'react-redux';
import { activateModal } from '../features/isModalActive/isModalActiveSlice';
import { setModalMenuType } from '../features/modalMenuType/modalMenuTypeSlice';
import styles from '../modules/AddStackButton.module.css'

function AddStackButton() {
    const modalType = 'addStack';
    const dispatch = useDispatch();

    function handleModalDisplay () {
        dispatch(activateModal());
        dispatch(setModalMenuType(modalType));
    }

    return (
        <div className={styles.add_stack_button} onClick={handleModalDisplay}>
            <button>
                +
            </button>
        </div>
    )
}

export default AddStackButton;
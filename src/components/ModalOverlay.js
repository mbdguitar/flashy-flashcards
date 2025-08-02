import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deactivateModal } from '../features/isModalActive/isModalActiveSlice';
import { resetModalMenuType } from '../features/modalMenuType/modalMenuTypeSlice';
import ChoiceModalMenu from "./ChoiceModalMenu";
import AddStackModalMenu from "./AddStackModalMenu";
import AddFlashcardModalMenu from "./AddFlashcardModalMenu";
import styles from '../modules/ModalOverlay.module.css';

function ModalOverlay() {
    const dispatch = useDispatch();
    const isActive = useSelector((state) => state.isModalActive);
    const modalType = useSelector((state) => state.modalMenuType);

    function toggleModal() {
        dispatch(deactivateModal());
        dispatch(resetModalMenuType());
    }

    if (isActive) {
        return (
            <div className={styles.modal_overlay} onClick={toggleModal}>
                <div className={styles.modal_container} onClick={(e) => e.stopPropagation()}>
                    {modalType === 'choiceMenu' ? <ChoiceModalMenu /> : null}
                    {modalType === 'addStack' ? <AddStackModalMenu /> : null}
                    {modalType === 'addFlashcard' ? <AddFlashcardModalMenu /> : null}
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default ModalOverlay;
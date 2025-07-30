import { useSelector } from "react-redux";
import AddStackModalMenu from "./AddStackModalMenu";
import styles from '../modules/ModalOverlay.module.css';

function ModalOverlay() {
    const isActive = useSelector((state) => state.isModalActive);
    const modalType = useSelector((state) => state.modalMenuType);

    if (isActive) {
        return (
            <div className={styles.modal_overlay}>
                {modalType === 'addStack' ? <AddStackModalMenu /> : null}
            </div>
        )
    }
}

export default ModalOverlay;
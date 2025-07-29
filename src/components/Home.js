import FlashcardContainer from '../containers/FlashcardContainer';
import SideNav from './SideNav';
import styles from '../modules/Home.module.css'

function Home() {
    return (
        <div className={styles.home}>
            <SideNav />
            <FlashcardContainer />
        </div>  
    )
}

export default Home;
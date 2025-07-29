import styles from '../modules/SideNav.module.css';

function SideNav() {
    return (
        <nav className={styles.sidenav}>
            <form>
                <select>
                    <option>Javascript</option>
                </select>
            </form>
           <ul>
                <li><a href="/">What does TypeError mean?</a></li>
                <li><a href="/">What does SyntaxError mean?</a></li>
                <li><a href="/">What does ReferenceError mean?</a></li>
            </ul> 
        </nav>
    )
}

export default SideNav;
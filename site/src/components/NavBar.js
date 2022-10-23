import styles from './NavBar.module.css'
import Logo from './util/img/Logo.png'
function NavBar(){
    return(
        <nav className={styles.NavBar}>
            <div><img src={Logo} alt="" /></div>
            <div>
                <ul>
                    <li>Menu</li>
                    <li>Delivers</li>
                    <li>Contact</li>
                </ul>
                <nav>
                    <span></span>
                    <span></span>
                    <span></span>
                </nav>
            </div>
        </nav>
    )
}

export default NavBar
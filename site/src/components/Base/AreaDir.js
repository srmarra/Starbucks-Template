import styles from "./AreaDir.module.css"
import BaseCafe from '../util/img/BaseDoCafé.png'
import cafe1 from '../util/img/cafes/Frame 5.png'
import cafe2 from '../util/img/cafes/Frame 6.png'
import cafe3 from '../util/img/cafes/Frame 7.png'
function AreaDir(){
    function Start(){

    }

    return(
    <nav onLoad={Start} className={styles.AreaDir}>
        <img src={BaseCafe} alt="" />
        <img className="cafes" src={cafe1} alt="" />


    </nav>
    )
}
export default AreaDir
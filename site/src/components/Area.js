import styles from './Area.module.css'
import AreaEsq from './Base/AreaEsq'

function Area(){
    return(
        <section className={styles.Area}>
            <AreaEsq/>
            <nav></nav>
        </section>
    )
}

export default Area
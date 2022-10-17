import styles from './Area.module.css'
import AreaDir from './Base/AreaDir'
import AreaEsq from './Base/AreaEsq'

function Area(){
    return(
        <section className={styles.Area}>
            <AreaEsq/>
            <AreaDir/>
        </section>
    )
}

export default Area
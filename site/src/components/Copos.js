import sy from './Copos.module.css'

import Cof1 from './util/img/Cafe0.png'
import Cof2 from './util/img/Cafe1.png'
import Cof3 from './util/img/Cafe2.png'






function Copos(props){
    let sc0 = {
        opacity: props.c0
    }

    let sc1 = {
        opacity: props.c1
    }

    let sc2 = {
        opacity: props.c2
    }



    return(
        <div className={sy.Copos}>
            <img style={sc0} src={Cof1} alt="" />
            <img style={sc1} src={Cof2} alt="" />
            <img style={sc2} src={Cof3} alt="" />

        </div>
    )
}

export default Copos
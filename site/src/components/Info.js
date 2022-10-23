import styles from './Info.module.css'

function Info(props){
    
    function S0(e){{props.Sts(0)}}
    function S1(e){{props.Sts(1)}}
    function S2(e){{props.Sts(2)}}

    let Bt0 = {
        backgroundColor: props.b0
    }

    let Bt1 = {
        backgroundColor: props.b1

    }

    let Bt2 = {
        backgroundColor: props.b2

    }

    return(
        


        <section className={styles.info}>
            <h1>Midnight Frappuccino</h1>
            <p>"May your Starbucks always be stronger than your Monday.good coffee, good people, good vibes"</p>
            <h2>£ 9.99</h2>
            <nav>
                <div style={Bt0} onClick={S0}></div>
                <div style={Bt1} onClick={S1} ></div>
                <div style={Bt2} onClick={S2} ></div>
            </nav>
        </section>
        
    )
}

export default Info
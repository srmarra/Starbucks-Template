
import './App.css';
import Cafes from './components/Cafes';
import Copos from './components/Copos';
import Info from './components/Info';
import LoadBar from './components/LoadBar';
import NavBar from './components/NavBar';
import  { useState } from "react"





function App() {
  const [Temp,setTemp] = useState(0);
  const [TempAc,setTempAc] = useState(false);


  // Qual como irá aparecer
  const [Cop1,setCop1] = useState(1);
  const [Cop2,setCop2] = useState(0);
  const [Cop3,setCop3] = useState(0);
// Qual como irá aparecer

// Cor btn
const [Btn1,setBtn1] = useState("#00704A");
const [Btn2,setBtn2] = useState("#7D827E");
const [Btn3,setBtn3] = useState("#7D827E");
// Cor Btn


  const [Sts,setSts] = useState(0);


  function setCopos(sts){
      setTempAc(true)
      setSts(sts)
      setTemp(0)
      Actualiza()
  }

  function Actualiza(){
    switch(Sts){
      case 0:
        setCop1(1);
        setCop2(0);
        setCop3(0);
        
        setBtn1("#00704A");
        setBtn2("#7D827E");
        setBtn3("#7D827E");
        break;
      case 1:
        setCop1(0);
        setCop2(1);
        setCop3(0);

        setBtn1("#7D827E");
        setBtn2("#00704A");
        setBtn3("#7D827E");

        break;
      case 2:
        setCop1(0);
        setCop2(0);
        setCop3(1);

        setBtn1("#7D827E");
        setBtn2("#7D827E");
        setBtn3("#00704A");
        setSts(0)
        break;
    }
  }

  setTimeout(()=>{
      if(Temp>=99 || TempAc){
          setTempAc(false)
          setTemp(0)
          setSts(Sts+1);
          Actualiza()
          
      }else{
        setTemp(Temp+0.1)
      }   
  }, 10);

  
  return (
  <>
    <Info Sts={setCopos} c0={Cop1} c1={Cop2} c2={Cop3}  b0={Btn1} b1={Btn2} b2={Btn3}/>
    <LoadBar temp = {Temp}/>
    <NavBar/>
    <Cafes/>
    <Copos c0={Cop1} c1={Cop2} c2={Cop3}/>
  </>
  );
}

export default App;

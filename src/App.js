import React,{useState,button, useEffect} from "react";
import "./App.css";

export default function App() {
  return (
    <div>
       <Texto titulo="jujutsu kaizen" />
      <br/>
      <Counter/> 
<img src="https://www.10wallpaper.com/wallpaper/1366x768/1307/fog_constellations_lilac-Space_Discovery_HD_Wallpaper_1366x768.jpg" alt="" className="imagem"/>

     

    </div>
  );
}

export function Texto(props) {
  return (
    <div> 
      <DivCentralizada  conteudo={<h1>{props.titulo}</h1>}/>
    </div>
  );
}

export function DivCentralizada(props) {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "",
      }}
    >
      <div style={{ textAlign: "center" }}>
        {props.conteudo}
        {props.imagenzinha}
      </div>
    </div>
  );
}



export function Counter(props){
  useEffect(() => {
  console.log('esse componenet foi montado')  
  }, [])
  
  const [contador,setContador] = useState(0)
  function Adicionar(){
    if(contador < lista.length ){
      setContador(contador + 1)
    }
  
  }
  
  function Remover(){
    
    setContador(contador - 1)
  }
  function Zerar(){
    setContador(0)
  }
 if(contador> 4){
  setContador(0)
 }
 if(contador < 0 ){
  setContador(0)
 }
 const lista = ["https://images6.alphacoders.com/373/thumb-1920-373654.jpg","https://images6.alphacoders.com/519/519732.jpg","https://i.pinimg.com/originals/2b/06/96/2b0696cea2d03483ea4dfca2f81b9c1d.jpg","https://wallpaper-house.com/data/out/9/wallpaper2you_294619.jpg","https://cdn.wallpapersafari.com/98/52/B2c8A1.jpg"]

 useEffect(() => {
  console.log('esse componenet foi atualizado')  
  }, [contador])


const[cor,setCor] = useState("white")
function Mudarcor() {
if(cor == "white"){
  setCor("black")
}

}

  return(
<div>

        <center>  <img style={{borderRadius:'10%',boxShadow:'12px 12px 30px 15px #3333ff',border: '8px solid #000000'}} 
        src={lista[contador]}
        alt="img juju"
        height={600}
        width={800 }
      />
      </center> 


<center><h3> Imagem: {contador + 1 } </h3></center>
<center> <button className="button1" onClick={Adicionar}> avançar  </button></center>
<center> <button className="button1" onClick={Remover}> voltar </button></center>
<center> <button className="button1" onClick={Zerar}> Zerar </button></center>


</div>

  )
}



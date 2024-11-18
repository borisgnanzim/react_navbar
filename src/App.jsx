import './App.css';
import { useState } from "react";




export default function App() {

  const [couleur, setCouleur] = useState('red') 

  const [couleur2, setCouleur2] = useState('blue') 

  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count+1)
    if (couleur=='red') {
      setCouleur('blue')
    }
    if(couleur =='blue')
    {
      setCouleur('red')
    }
  }

  const [count2, setCount2] = useState(0)

 
  function handleClick2() {
    setCount2(count2+1)

    if (couleur2=='red') {
      setCouleur2('blue')
    }
    if(couleur2 =='blue')
    {
      setCouleur2('red')
    }
  }

  return (
    <>
    <div >  
      <h1 >
        Welcome to my app
      </h1>
      <div>
      <MyButton count={count} click={handleClick} color={couleur} />
      <MyButton count={count2} click={handleClick2} color={couleur2} />
      </div>
      <br />
     
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </div>
    </>

  );
   
}

function MyButton({count, click, color}) {
  return (
    <>
    <button type="button"  onClick={click} style={{color:color}} >You click {count} times </button>
    </>
  );
}

function Square() 
{

  return ( 
    <button className='square'>
        X
    </button>
  );
}


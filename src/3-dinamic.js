import {Switch, Route, Link, Routes, useMatch, useParams } from 'react-router-dom'
const Proyecto = () => {
  const match = useMatch("/portafolio/:proyecto_id")
  console.log(match)
  const {proyecto_id} = match.params
  return (
    <h3> Proyecto {proyecto_id} </h3>
  )
}
const Portafolio =()=>{
  return(
    <div>
        <h1>Portafolio</h1>
        <ul>
          <li><Link to={'proyecto-1'}>Proyecto1</Link></li>
          <li><Link to={'proyecto-2'}>Proyecto2</Link></li>
        </ul>
        <div>
        <Routes>
          <Route path=":proyecto_id" element= {<Proyecto/>} />
        

        </Routes>
        </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <nav>
        <ul>
        <li><Link to='/'> Inicio </Link></li>
        <li><Link to='/portafolio/'> Portafolio </Link></li>
          
        </ul>
      </nav>
      <section>
        <Routes>
          <Route exact path="/" element= {<h1>Inicio</h1>} />
          <Route path="/portafolio/*"  element={<Portafolio/>}/> 
        </Routes>
      </section>
    </div>
  );
}

export default App;

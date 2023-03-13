import { Route, NavLink, Routes, useMatch,} from 'react-router-dom'
import './App.css'
const Proyecto = () => {
  const match = useMatch("/portafolio/:proyecto_id")
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
          <li><NavLink  to={'proyecto-1'}>Proyecto1</NavLink></li>
          <li><NavLink  to={'proyecto-2'}>Proyecto2</NavLink></li>
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
        <li><NavLink to='/'> Inicio </NavLink></li>
        <li><NavLink isActive={(match,location)=> {console.log(match,location);}} to='/portafolio/'> Portafolio </NavLink></li>
          
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

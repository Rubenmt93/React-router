import {Switch, Route, Link, Routes} from 'react-router-dom'

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
          <Route path="proyecto-1" element= {<h3>Proyecto1</h3>} />
          <Route path="proyecto-2" element= {<h3>Proyecto2</h3>} />

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

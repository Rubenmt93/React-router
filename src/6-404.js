import { Route, Link, Routes, Navigate} from 'react-router-dom'

const Portafolio = () => {
   const loggedId=true
   return loggedId? <h1>Portafolio</h1> :   <Navigate to="/" />;
}


function App() {
  return (
    <div>
      <nav>
        <ul>
        <li><Link to='/'> Inicio </Link></li>
        <li><Link to='/perfil'> Perfil </Link></li>
        <li><Link to='/portafolio'> Portafolio </Link></li>
          
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element= {<h1>Inicio</h1>} />
          <Route path="/perfil" element= {<h1>Perfil</h1>} />
          <Route path="/portafolio"  element={<Portafolio/>}/> 
          <Route path="*"  element={<h1>404</h1>}/> 
        </Routes>
      </section>
    </div>
  );
}

export default App;

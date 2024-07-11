import './App.css'
import Lista from './Lista'
import Formulario from '../formulario/Formulario'
import Busqueda from './busqueda/Busqueda'


function App() {


  return (
    <>
      <div className='todo'>
        <h1>Challenge</h1>
        <Busqueda/>
        <Formulario/>
        <Lista/>
      </div>
     
    </>
  )
}

export default App

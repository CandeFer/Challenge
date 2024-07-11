/* eslint-disable react/prop-types */
import { useState, useContext } from 'react';
import { InfoContext } from '../contexto/info';
import './busqueda.css'

const Busqueda = () => {
    const { search } = useContext(InfoContext);
    const [letras, setLetras] = useState('');
    const [resultados, setResultados] = useState([]);

    const handleInputChange = (e) => {
        setLetras(e.target.value);
    };

    const handleSearch = () => {
        const datosFiltrados = search(letras);
        setResultados(datosFiltrados); 
        console.log(resultados)
    };

    return (
        <div className='busqueda'>
            <input
                type="text"
                placeholder="Buscar"
                value={letras}
                onChange={handleInputChange}
            />
            <button type="button" onClick={handleSearch}>
                Buscar
            </button>

            <div className="resultados">
                {resultados.length > 0 ? (
                    resultados.map((usuario) => (
                        <div className='busUsuario' key={usuario.id}>
                            <h2>{usuario.name} {usuario.username}</h2>
                            <p>Email: {usuario.email}</p>
                            <p>Ciudad: {usuario.address.city}</p>
                            <p>Teléfono: {usuario.phone}</p>
                            <p>Empresa: {usuario.company.name}</p>
                        </div>
                    ))
                ) : (
                    <p>Respetar las mayúsculas y minúsculas.</p>
                )}
            </div>
        </div>
    );
};

export default Busqueda;

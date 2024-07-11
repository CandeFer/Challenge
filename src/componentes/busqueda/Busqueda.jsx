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
                        <div key={usuario.id}>
                            <h2>{usuario.name}</h2>
                            <p>Username: {usuario.username}</p>
                            <p>Email: {usuario.email}</p>
                            <p>Ciudad: {usuario.address.city}</p>
                            <p>Teléfono: {usuario.phone}</p>
                            <p>Empresa: {usuario.company.name}</p>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron resultados</p>
                )}
            </div>
        </div>
    );
};

export default Busqueda;

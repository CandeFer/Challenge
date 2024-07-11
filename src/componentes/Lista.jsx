import {useContext } from "react";
import { InfoContext } from "./contexto/info";
import './Lista.css'

const Lista = () => {
  const { info } = useContext(InfoContext);


  return (
    <>
      <div className="Listado">
        {info.map((dato) => (
          <div className="persona" key={dato.id}>
            <h2> {dato.name} {dato.username}</h2>
            <p><strong>{dato.email}</strong></p>
            <p><strong>{dato.address.city}</strong></p>
            <p><strong>{dato.phone}</strong></p>
            <p><strong>{dato.company.name}</strong></p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Lista;

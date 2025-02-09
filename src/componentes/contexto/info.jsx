/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';

export const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
  const [info, setInfo] = useState([]);

  const updateinfo = (usuario) => {
    setInfo([...info, usuario]);
  };

  const search = (letras) => {
    if (!letras) {
      return [];
    }
    return info.filter(
      (usuario) =>
        usuario.name.includes(letras) ||
        usuario.username.includes(letras) ||
        usuario.email.includes(letras) ||
        usuario.address.city.includes(letras) ||
        usuario.phone.includes(letras) ||
        usuario.company.name.includes(letras)
    );
  }



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((datos) => {
        console.log(datos);
        setInfo(datos);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <InfoContext.Provider value={{ info, updateinfo, search }}>
      {children}
    </InfoContext.Provider>
  );
};

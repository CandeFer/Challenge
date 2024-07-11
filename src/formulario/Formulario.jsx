import { useState, useContext } from "react";
import IconoUsuario from '../assets/user.svg';
import './Formulario.css';
import { InfoContext } from "../componentes/contexto/info";

const Formulario = () => {
    const [visible, setVisible] = useState(false);

    const { updateinfo } = useContext(InfoContext);

    const visibilidad = () => {
        setVisible(!visible);
    };

    const datosUsuario = (e) => {

        e.preventDefault();

        const name = e.target.name.value;
        const username = e.target.username.value;
        const email = e.target.email.value;
        const city = e.target.city.value;
        const phone = e.target.phone.value;
        const company = e.target.company.value;

        const nuevoUsuario = {
            id: Math.random(),
            name,
            username,
            email,
            address: {
                city
            },
            phone,
            company: {
                name: company
            }
        };

        console.log(nuevoUsuario)
        updateinfo(nuevoUsuario)

        e.target.reset();

    };

    return (
        <>
            <button type="button" onClick={visibilidad} className="agregar">
                <img src={IconoUsuario} alt="Agregar Usuario" />
            </button>
      

            <form className={visible ? 'no-oculto' : 'oculto'} onSubmit={datosUsuario}>

                <input type="text" name="name" placeholder="Nombre" required />
                <input type="text" name="username" placeholder="Username" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="text" name="city" placeholder="Ciudad" required />
                <input type="text" name="phone" placeholder="Teléfono" required />
                <input type="text" name="company" placeholder="Empresa" required />

                <button type="submit">Crear</button>
            </form>
        </>
    );
};

export default Formulario;

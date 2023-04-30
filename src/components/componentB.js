import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';


const ComponentB = ({contact}) => {
    const [connected,setConnected]=useState(contact.connected);
    const toggleConnected=()=>{
        contact.toggleConnected();
        setConnected(contact.connected);
    }
    return (
        <h4>
            { connected? "Contacto En Línea":"Contacto No Disponible" } <button onClick={toggleConnected}> Cambiar estado </button>
        </h4>
    );
};


ComponentB.propTypes = {
    contact:PropTypes.instanceOf(Contact)
};


export default ComponentB;

import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';
import ComponentB from './componentB';


const ComponentA = ({contact=null}) => {
    if (contact==null) {
        contact=new Contact("Default Contact Name","Default Contact Surname","demo@email.com");
    }
    return (
        <div>
            <h1>Name: { contact.name }</h1>
            <h2>Surname: { contact.surname }</h2>
            <h3>Email: { contact.email }</h3>
            <ComponentB contact={contact}></ComponentB>
        </div>
    );
};


ComponentA.propTypes = {
    contact:PropTypes.instanceOf(Contact)
};


export default ComponentA;

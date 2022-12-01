import React,  { useState } from "react";
import CardConsulta from "../../components/CardConsulta";

import './styles.css'

const Consulta = () => {
    return (
        <div className="containerPrincipal">
            <div className="container" id="container">
                <h2 className="mb-5 text-center">Nossos Procedimentos</h2>
                <CardConsulta></CardConsulta>
            </div>
        </div>
    );
}

export default Consulta;

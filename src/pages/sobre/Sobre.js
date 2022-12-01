import React from "react";
import Card from 'react-bootstrap/Card';
import './styles.css'

const Sobre = () => {
    return (
        <div className="container">
            <div className="imgSobre"></div>
            <h2 className="pt-5 mb-4 text-start">Sobre nossas clinicas </h2>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>Nossos Doutores ✅</Card.Title>
                    <Card.Text>
                        Especialista em Harmonização Facial. Atendimento de alta qualidade e com tecnologias avançadas e rígidos protocolos de segurança, aliado a uma moderna e completa infraestrutura. Proporciona uma experiência única e diferenciada, garantindo o alto nível de satisfação para com seus pacientes.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>Alta tecnologia por um valor fixo ✅</Card.Title>
                    <Card.Text>
                        Aqui, nós planejamos seu protocolo de forma personalizada! Ao se tornar cliente, você pode realizar outros tratamentos, além das suas sessões mensais, por valores especiais de acordo com o seu plano.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>Equipamentos de última geração ✅</Card.Title>
                    <Card.Text>
                        Aqui disponibilizamos em suas clínicas, aparelhos com a mais alta tecnologia. Seguimos padrões internacionais de qualidade para levar o autocuidado de forma inteligente e segura para cada um de vocês!
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    ); 
}

export default Sobre;
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import './styles.css';

const Home = () => {
    return (
        <div className="container">
          <div className="imgHome"></div>
          <Card className="mt-5 mb-5">
            <Card.Body>
                <Card.Title>Somos a mais renomada clínica de estética da América latina.</Card.Title>
                <Card.Text>
                Aqui é onde você pode relaxar e deixar que profissionais de qualidade cuidem de você, para não se estressar e criar possíveis rugas, não é mesmo?
                </Card.Text>
                <Button variant="primary">
                  <Nav.Link href="/consulta">Marcar consulta</Nav.Link>
                </Button>
            </Card.Body>
          </Card>
          <h2 className="pt-5 mb-4 text-start">Comentarios </h2>
          <Card className="mb-3">
            <Card.Header as="h5" style={{color: 'blue'}}>@BrunoCota</Card.Header>
            <Card.Body>
                <Card.Text>
                  Super indico está clinica, precisei fazer um procecimento facial e deu 100% certo! <br/>
                  Eles foram super atenciosos.
                </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Header as="h5" style={{color: 'blue'}}>@JuliaChagas</Card.Header>
            <Card.Body>
                <Card.Text>
                  Adorei o atendimento, virei fã!
                </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Header as="h5" style={{color: 'blue'}}>@MauraXavier</Card.Header>
            <Card.Body>
                <Card.Text>
                  Nota 10 para os serviços de esfoliação, estou a pouco tempo fazendo o tratamento e ja tenho os resultados.
                </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Header as="h5" style={{color: 'blue'}}>@IgorBorsonello</Card.Header>
            <Card.Body>
                <Card.Text>
                  Incrivel a facilidade e agilidade para marcar as consultas, nota dez para os envolvidos.
                </Card.Text>
            </Card.Body>
          </Card>
        </div>
    );
} 

export default Home;
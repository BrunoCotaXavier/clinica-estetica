import React,  { useState } from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import img1 from '../assets/harmonizacaoFacial.png'
import img2 from '../assets/lipoDePapa.png'
import img3 from '../assets/bichectomia.jpeg'

const CardConsulta = ({ isActive }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>
            <div className="mb-3 row d-flex justify-content-center">
                    <Card className="p-3 mx-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Harmonização Facial</Card.Title>
                            <Card.Text>
                                é um conjunto de procedimentos estéticos combinados para melhorar a harmonia do rosto.
                            </Card.Text>
                            <Button onClick={handleShow} variant="primary">Marcar horario</Button>
                        </Card.Body>
                    </Card>
                    <Card className="p-3 mx-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Lipo de Papada</Card.Title>
                            <Card.Text>
                                é a aspiração da gordura localizada sob o queixo, mandíbula e na porção superior do pescoço.
                            </Card.Text>
                            <Button onClick={handleShow} variant="primary">Marcar horario</Button>
                        </Card.Body>
                    </Card>
                    <Card className="p-3 mx-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Bichectomia</Card.Title>
                            <Card.Text>
                                é a cirurgia para retirar o excesso da bola de Bichat (Estrutura gordurosa presente na região da bochecha)
                            </Card.Text>
                            <Button onClick={handleShow} variant="primary">Marcar horario</Button>
                        </Card.Body>
                    </Card>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Consulta</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required placeholder="Email de contato" />
                            <Form.Text className="text-muted">
                                Nunca compartilharemos seu e-mail com mais ninguém.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control required type="text" placeholder="Nome" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Datas Disponiveis</Form.Label>
                            <Form.Control required type="datetime-local" placeholder="Nome" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check required type="checkbox" label="Autorizo contato via email" />
                        </Form.Group>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleClose}>
                            Marcar Consulta
                        </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    );
}

export default CardConsulta;
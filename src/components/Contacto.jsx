import { Button, Form } from 'react-bootstrap';

function Contacto() {
    return (
        <div>
            <h1 className="text-center">Cuentanos, ¿en que te podemos ayudar?</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3 text-center">
                        <Button className='mb-3' variant="danger" type="submit">
                            Enviar
                        </Button>
                </Form.Group>
            </Form>
        </div>

    )
}

export default Contacto;
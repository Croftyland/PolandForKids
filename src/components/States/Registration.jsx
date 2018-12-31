import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
} from 'reactstrap';

class Registration extends Component {
    render() {
        return (
            <Container className="Registration">
                <h2 className="Present">Przedstaw się! Wpisz lub powiedz na głos</h2>
                <Form className="form">
                    <Col>
                        <FormGroup className="inputLine">
                            <Label for="exampleName">Jak się nazywasz?</Label>
                            <Input
                                type="name"
                                name="name"
                                id="exampleName"
                                placeholder="Mścisław"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup className="inputLine">
                            <Label  for="exampleYears">Ile masz lat?</Label>
                            <Input
                                type="years"
                                name="years"
                                id="exampleYears"
                                placeholder="6"
                            />
                        </FormGroup>

                    </Col>
                    <Col>
                        <FormGroup className="inputLine">
                            <Label for="exampleCity">W jakim mieście mieszkasz?</Label>
                            <Input
                                type="city"
                                name="city"
                                id="exampleCity"
                                placeholder="Warszawa"
                            />
                        </FormGroup>

                    </Col>
                </Form>
            </Container>
        );
    }
}
export default Registration;

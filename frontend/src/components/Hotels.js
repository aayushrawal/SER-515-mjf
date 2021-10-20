import React from "react";
import "./Hotels.scss";
import { Link } from "react-router-dom";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";


const SubmitForm = (e) => {
    e.preventDefault();
}


const Hotels = (props) => {
    return (
        <div className="hotel">
            <div className="hotel-Header">
                <div className="hotel-Header-Content">
                    <h1 className="text">Hotels</h1>
                </div>
            </div>

            <div className="hotel-Body">

                <div className="col-12">

                    <p class="h2">
                        Book Hotels For your Team
                    </p>
                    <p class="h4">
                        !!!All the Teams have to book a Hotel from the listed properties only,
                        any team booking outside will not be considered for the acceptance of the
                        tournament.
                    </p>
                    <div className="text-center">
                        <a target="_blank" href="https://hotels.sitesearchllc.net/v6?currency=USD&type=geo&siteid=69747&longitude=-84.16356960000000&latitude=39.84197160000000&radius=100&checkin=10/15/2021&nights=2&message=message&locationlabel=Warrior+Soccer+Complex&cid=GROUP-EVENT-EMAIL&pageSize=10&useMiles">
                            <Button onclick="('window.location.href)"
                                className="mt-4"
                                color="warning"
                                type="submit"
                                class="btn btn-default"
                            >Book Hotel
                            </Button>
                        </a>
                    </div>
                    <br />
                    <br />
                    <p class="h3">
                        Don't have time to book a hotel? No problem we can do that for you.
                        Just submit the form and relax and we will book a Hotel for You.
                    </p>
                    <Container className="pt-lg-7">
                        <Row className="justify-content-center">
                            <Col lg="5">
                                <Card className="bg-secondary shadow border-0">
                                    <CardBody className="px-lg-5 py-lg-5">
                                        <div className="text-center text-muted mb-4">
                                            <small>Request for Hotel Booking</small>
                                        </div>
                                        <Form role="form" onSubmit={SubmitForm}>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative mb-3">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-hat-3" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input placeholder="Name" type="text" id="name" />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative mb-3">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-email-83" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input placeholder="Email" type="email" />
                                                </InputGroup>
                                            </FormGroup>
                                            <div className="text-center">
                                                <Button
                                                    className="mt-4"
                                                    color="warning"
                                                    type="submit"
                                                >
                                                    Submit Form
                                                </Button>
                                            </div>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Hotels;

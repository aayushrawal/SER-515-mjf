import "./SponsorCreation.scss";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

const SponsorCreation = () => {
  const [data, setData] = useState({
    sponsorName: "",
  });

  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };

  const addSponsor = () => {
    console.log("Added sponsor");
  };

  return (
    <div className="section section-shaped section-lg">
      <div className="shape shape-style-1 bg-gradient-default">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <section className=" bg-gradient-default">
        <Container className="pt-lg pb-300">
          <Row className="text-center justify-content-center">
            <Col lg="10">
              <h2 className="display-3 text-white">Add Tournament Sponsors</h2>
              <br />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section section-lg pt-lg-0 section-contact-us">
        <Container>
          <Row className="justify-content-center mt--300">
            <Col lg="8">
              <Card className="bg-gradient-secondary shadow">
                <CardBody className="p-lg-3">
                  <h4 className="mb-1">
                    Please add the sponsor name and upload its image.
                  </h4>
                  <br />
                  <Form role="form" onSubmit={addSponsor}>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-money"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Sponsor name"
                          type="text"
                          id="sponsorName"
                          onChange={handle}
                          value={data.sponsorName}
                        />
                      </InputGroup>
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="button"
                      >
                        Add Sponsor
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="separator separator-bottom separator-skew zindex-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon className="fill-white" points="2560 0 2560 100 0 100" />
        </svg>
      </div>
    </div>
  );
};

export default SponsorCreation;

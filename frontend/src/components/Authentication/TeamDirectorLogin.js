import React, { useState } from 'react';
import axios from 'axios';
import './TeamDirectorLogin.scss';

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
	Col
} from 'reactstrap';

const TeamDirectorLogin = (props) => {
	return (
		<div useRef="main">
			<div className="section section-shaped section-lg">
				<div className="shape shape-style-1 bg-gradient-default">
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
				</div>
				<div className="hotel">
					<Container className="pt-lg-7">
						<Row className="justify-content-center">
							<Col lg="5">
								<Card className="bg-secondary shadow border-0">
									<CardBody className="px-lg-5 py-lg-5">
										<div className="text-center text-muted mb-4">
											<small>Team Director Login</small>
										</div>
										<Form role="form">
											<FormGroup>
												<InputGroup className="input-group-alternative mb-3">
													<InputGroupAddon addonType="prepend">
														<InputGroupText>
															<i className="ni ni-users_single-02" />
														</InputGroupText>
													</InputGroupAddon>
													<Input placeholder="User Name" type="text" />
												</InputGroup>
											</FormGroup>
											<FormGroup>
												<InputGroup className="input-group-alternative mb-3">
													<InputGroupAddon addonType="prepend">
														<InputGroupText>
															<i className="ni ni-ui-1_lock-circle-open" />
														</InputGroupText>
													</InputGroupAddon>
													<Input placeholder="Password" type="password" />
												</InputGroup>
											</FormGroup>
											<div className="text-center">
												<Button className="mt-4" color="warning" type="submit">
													Login
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

export default TeamDirectorLogin;

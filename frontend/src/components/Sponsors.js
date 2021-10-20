import React from 'react';
import './Sponsors.scss';

import aws from '../assets/img/brand/aws.png';
import nike from '../assets/img/brand/nike.png';
import espn from '../assets/img/brand/espn.png';
import hyatt from '../assets/img/brand/hyatt.png';
import corona from '../assets/img/brand/corona.jpeg';
import adidas from '../assets/img/brand/adidas.png';

import { Badge, Button, Card, CardBody, Container, Row, Col, CardImg } from 'reactstrap';

const AboutUs = () => {
	return (
		<section className="section section-lg section-shaped pb-250">
			<div className="shape shape-style-1 shape-default">
				<span />
				<span />
				<span />
				<span />
				<span />
				<span />
				<span />
				<span />
				<span />
			</div>
			<Container className="py-lg-md d-flex">
				<div className="col px-0">
					<Row>
						<Col lg="12">
							<h1 className="display-3 text-white">Our Sponsors and Partners</h1>
						</Col>
					</Row>
				</div>
			</Container>
			<Container className="py-lg-md d-flex">
				<Container>
					<Row className="justify-content-center">
						<Col lg="12">
							<Row className="row-grid">
								<Col lg="4">
									<Card className="card-lift--hover shadow border-0">
										<CardImg className="img-fluid" src={aws} alt="placeholder" width="100%" />
										<CardBody className="py-5">
											<h6 className="text-primary text-uppercase">Amazon Web Services</h6>

											<div>
												<Badge color="primary" pill className="mr-1">
													Title Sponsor
												</Badge>
											</div>
										</CardBody>
									</Card>
								</Col>
								<Col lg="4">
									<Card className="card-lift--hover shadow border-0">
										<CardImg
											className="img-fluid"
											src={hyatt}
											alt="placeholder"
											width="100%"
											height="800vw"
										/>
										<CardBody className="py-5">
											<h6 className="text-primary text-uppercase">Hyatt</h6>

											<div>
												<Badge color="primary" pill className="mr-1">
													Hospitality Partner
												</Badge>
											</div>
										</CardBody>
									</Card>
								</Col>
								<Col lg="4">
									<Card className="card-lift--hover shadow border-0">
										<CardImg className="img-fluid" src={espn} alt="placeholder" width="100%" />
										<CardBody className="py-5">
											<h6 className="text-primary text-uppercase">ESPN</h6>

											<div>
												<Badge color="primary" pill className="mr-1">
													Media Partner
												</Badge>
											</div>
										</CardBody>
									</Card>
								</Col>
								<Col lg="4">
									<Card className="card-lift--hover shadow border-0">
										<CardImg className="img-fluid" src={nike} alt="placeholder" width="100%" />
										<CardBody className="py-5">
											<h6 className="text-primary text-uppercase">Nike</h6>

											<div>
												<Badge color="primary" pill className="mr-1">
													Clothing Partner
												</Badge>
											</div>
										</CardBody>
									</Card>
								</Col>
								<Col lg="4">
									<Card className="card-lift--hover shadow border-0">
										<CardImg className="img-fluid" src={corona} alt="placeholder" width="100%" />
										<CardBody className="py-5">
											<h6 className="text-primary text-uppercase">Corona</h6>

											<div>
												<Badge color="primary" pill className="mr-1">
													Refreshment Sponsor
												</Badge>
											</div>
										</CardBody>
									</Card>
								</Col>
								<Col lg="4">
									<Card className="card-lift--hover shadow border-0">
										<CardImg className="img-fluid" src={adidas} alt="placeholder" width="100%" />
										<CardBody className="py-5">
											<h6 className="text-primary text-uppercase">Adidas</h6>

											<div>
												<Badge color="primary" pill className="mr-1">
													Merchandise Partner
												</Badge>
											</div>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</Container>
			{/* SVG separator */}
			<div className="separator separator-bottom separator-skew">
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
		</section>
	);
};

export default AboutUs;

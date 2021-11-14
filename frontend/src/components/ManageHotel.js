import React from 'react';
import './ManageHotel.scss';
import axios from 'axios';

import { Button, Form } from 'reactstrap';

import { Link } from 'react-router-dom';

const ManageHotel = () => {
	const url = '/api/hotels/booking';

	const retrieve = (e) => {
		e.preventDefault();
		axios.get(url).then(function(response) {
			console.log(response.data);
		});
	};

	return (
		<section className="section section-lg section-shaped main-section">
			<div className="shape shape-style-1 bg-gradient-default">
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
			<div className="managehotelhome">
				<div className="managehotelhome-Body">
					<div className="col-12">
						<div className="text-center">
							<Form role="form" onSubmit={retrieve}>
								<div className="text-center">
									<Button
										className="mt-4"
										color="warning"
										type="submit"
									>
										Retrive Data
									</Button>
								</div>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ManageHotel;

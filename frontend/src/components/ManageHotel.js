import React, { useState, useEffect } from 'react';
import './ManageHotel.scss';
import axios from 'axios';
import HotelItem from './HotelItem';

const ManageHotel = () => {
	var newData = [];

	const [ coachData, setData ] = useState(newData);

	const url = '/api/hotels/booking';

	useEffect(() => {
		getAllCoach();
	}, []);

	const getAllCoach = () => {
		axios.get(url).then(function(response) {
			newData = response.data;
			setData(newData);
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
							<div className="HotelItems">
								{coachData.map((item, index) => {
									return (
										<HotelItem
											index={index}
											item={item}
											key={index}
										/>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ManageHotel;

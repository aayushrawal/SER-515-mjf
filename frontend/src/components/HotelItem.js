import React from 'react';
import './HotelItem.scss';
import { Input, Button } from 'reactstrap';

function HotelItem({ item }) {
	return (
		<div>
			<div className="HotelItem">
				<div className="CoachName">{item.coachName}</div>
				<div className="CoachEmail">{item.coachEmail}</div>
				<div className="CoachVenue">
					<Input
						placeholder="Venue Name"
						type="text"
						id="coachVenue"
					/>
				</div>
				<div className="Submit">
					<Button className="mt-4" color="warning" type="submit">
						Submit
					</Button>
				</div>
			</div>
		</div>
	);
}

export default HotelItem;

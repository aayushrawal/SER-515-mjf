import React, { useState } from 'react';
import './HotelItem.scss';
import { Input, Button } from 'reactstrap';
import axios from 'axios';
import Alerts from "../components/Alerts";


const HotelItem = ({ item }) => {

	const url = "https://sparkys-league-server.herokuapp.com/api/hotels/hotel-director";
	const emailurl = "/sendemail3/";

	const [isAlert, setIsAlert] = useState(false);
	const [alertColor, setAlertColor] = useState("");
	const [alertStatus, setAlertStatus] = useState("");
	const [alertMessage, setAlertMessage] = useState("");

	const [data, setdata] = useState({
		coachVenue: ""
	})

	const handle = (e) => {
		const newdata = { ...data };
		newdata[e.target.id] = e.target.value;
		setdata(newdata)
	}

	const createAlertMessage = ({ alertColor, alertStatus, alertMessage }) => {
		setIsAlert(true);
		setAlertColor(alertColor);
		setAlertStatus(alertStatus);
		setAlertMessage(alertMessage);
	};
	const resetAlertMessage = () => {
		setIsAlert(false);
		setAlertColor("");
		setAlertStatus("");
		setAlertMessage("");
	};

	const resetForm = () => {
		const obj = {
			coachVenue: "",
		};
	
	
		const newObj = {
		  ...obj,
		};
	
		setdata(newObj);
	  };
	

	const Submit = (e) => {
		e.preventDefault();

		axios.post(
			url,
			{
				coachName: item.coachName,
				coachEmail: item.coachEmail,
				coachVenue: data.coachVenue
			},
			{
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		)
			.then((res) => {
				if (res.status === 200) {
					const createObj = {
						alertColor: "success",
						alertStatus: "Success!",
						alertMessage: "hotel booking request successful!",
					}
					createAlertMessage(createObj);
					resetForm();
					setTimeout(() => {
						resetAlertMessage();
					}, 2500);
				}
				else {
					const createObj = {
						alertColor: "danger",
						alertStatus: "Failure!",
						alertMessage: "Something went wrong!",
					};
					createAlertMessage(createObj);
					setTimeout(() => {
						resetAlertMessage();
					}, 2500);
				}

			})
      axios
      .post(
        emailurl+item.coachEmail,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
	};

	return (
		<div>
			{isAlert ? (
            <Alerts
              color={alertColor}
              status={alertStatus}
              message={alertMessage}
            /> 
          ) : (
            ""
          )}
			<div className="HotelItem">
				<div className="CoachName" >{item.coachName}</div>
				<div className="CoachEmail" >{item.coachEmail}</div>
				<div className="CoachVenue">
					<Input
						placeholder="Venue Name"
						type="text"
						id="coachVenue"
						value={data.coachVenue}
						onChange={handle}
					/>
				</div>
				<div className="Submit">
					<Button className="mt-4" color="warning" type="submit" onClick={Submit}>
						Submit
					</Button>
				</div>
			</div>
		</div>
	);
}

export default HotelItem;

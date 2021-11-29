import React from 'react';
import './Fixtures.scss';
import Table from 'react-bootstrap/Table';
import { Container } from 'reactstrap';

function Fixtures() {
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
				<div className="Fixtures">
					<div className="Fixtures-Body">
						<div className="ArticleStory">
							<Container className="py-lg-md d-flex">
								<div className="col px-0">
									<h1 className="display-3 text-white">
										Fixtures
									</h1>
									<Table
										striped
										bordered
										hover
										size="lg"
									>
										<thead>
											<tr>
												<th>Home Team</th>
												<th>Away Team</th>
												<th>Time</th>
												<th>Venue</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Team A</td>
												<td>Team B</td>
												<td>1 pm EST</td>
												<td>T-Mobile Park</td>
											</tr>
											<tr>
												<td>Team C</td>
												<td>Team D</td>
												<td>1:30 pm EST</td>
												<td>T-Mobile Park</td>
											</tr>
											<tr>
												<td>Team E</td>
												<td>Team F</td>
												<td>2 pm EST</td>
												<td>T-Mobile Park</td>
											</tr>
											<tr>
												<td>Team G</td>
												<td>Team H</td>
												<td>2:30 pm EST</td>
												<td>Michigan Stadium</td>
											</tr>
											<tr>
												<td>Team I</td>
												<td>Team J</td>
												<td>3:00 pm EST</td>
												<td>Michigan Stadium</td>
											</tr>
											<tr>
												<td>Team K</td>
												<td>Team L</td>
												<td>3:30 pm EST</td>
												<td>Michigan Stadium</td>
											</tr>
											<tr>
												<td>Team M</td>
												<td>Team N</td>
												<td>4:00 pm EST</td>
												<td>State Farm Stadium</td>
											</tr>
											<tr>
												<td>Team O</td>
												<td>Team P</td>
												<td>4:30 pm EST</td>
												<td>State Farm Stadium</td>
											</tr>
											<tr>
												<td>Team Q</td>
												<td>Team R</td>
												<td>5:00 pm EST</td>
												<td>State Farm Stadium</td>
											</tr>
											<tr>
												<td>Team S</td>
												<td>Team T</td>
												<td>5:30 pm EST</td>
												<td>Chase Field</td>
											</tr>
											<tr>
												<td>Team U</td>
												<td>Team V</td>
												<td>6:00 pm EST</td>
												<td>Chase Field</td>
											</tr>
											<tr>
												<td>Team W</td>
												<td>Team X</td>
												<td>6:30 pm EST</td>
												<td>LA Memorial Coliseum</td>
											</tr>
											<tr>
												<td>Team Y</td>
												<td>Team Z</td>
												<td>7:00 pm EST</td>
												<td>LA Memorial Coliseum</td>
											</tr>
											
										</tbody>
									</Table>
								</div>
							</Container>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Fixtures;
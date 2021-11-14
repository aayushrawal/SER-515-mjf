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
												<td>A</td>
												<td>B</td>
												<td>7 pm EST</td>
												<td>Tempe</td>
											</tr>
											<tr>
												<td>A</td>
												<td>B</td>
												<td>7 pm EST</td>
												<td>Tempe</td>
											</tr>
											<tr>
												<td>A</td>
												<td>B</td>
												<td>7 pm EST</td>
												<td>Tempe</td>
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

import React from "react";
import "./PointTable.scss";
import Table from 'react-bootstrap/Table'
import {
  Badge, Button, Card, CardBody, Container, Row, Col, CardImg
} from "reactstrap";

const TableHeader = () =>
<thead>
<th>#</th>
<th>Team Name</th>
<th>Pts</th>
<th>GD</th>
<th>GA</th>
<th>GF</th>
<th>L</th>
<th>D</th>
<th>W</th>
<th>Pl</th>
</thead>

const TableData = () =>
<>
<tr>
    <td>1</td>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
</tr>
<tr>
    <td>1</td>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
</tr>
<tr>
    <td>1</td>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
</tr>

<tr>
    <td>1</td>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
</tr>

<tr>
    <td>1</td>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
</tr>

</>


const PointTable = () => {
  return (
 
  <section className="section section-shaped section-lg">
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
  <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
    <div>
    <Container className="py-lg-md d-flex">
        <div className="col px-0">
           <Col lg="12">
              <h1 className="display-3 text-white">
                POINTS TABLE
              </h1>
            </Col>

    <Table striped bordered hover>
    <TableHeader></TableHeader>
        <tbody>               
            <TableData></TableData>
        </tbody>    
    </Table>
    </div>
    </Container>
  </div> 
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

export default PointTable;

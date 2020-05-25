import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Card1 = ({ details }) => {
  return (
    <div>
      <Card>
        <CardBody className="text-center">
          <img
            height="150"
            width="150"
            className="rounded-circle img-thumbnail"
            src={details.picture?.large}
          />
          <CardTitle style={{color:"#121212"}}>
            <h2>
              <span>{details.name?.title}. </span>
              <span>{details.name?.first} </span>
              <span>{details.name?.last}</span>
            </h2>
          </CardTitle>
          <CardText>
            <FaMapMarkedAlt /> 
            <span className="pl-2">{details.location?.city}</span>
            <div>
              <FaPhone />
              <span className="pl-2">{details.phone}</span>
            </div>
            <div>
              <span className="pl-2">Email: </span>
              <span className="pl-2">{details.email}</span>
            </div>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Card1;

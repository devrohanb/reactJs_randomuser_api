import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Card1 = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail"
          src={details.picture?.large}
        />

        <CardTitle className="text-primary">
          <h1>
            <span>{datails.name?.title}</span>
          </h1>
        </CardTitle>
      </CardBody>
    </Card>
  );
};

export default Card1;

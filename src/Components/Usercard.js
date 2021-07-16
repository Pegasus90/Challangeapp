import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Usercard = ({ user }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            {" "}
            <Link
              to={{
                pathname: `/user/${user.id}`,
                state: user,
              }}
              className="cardToLink"
            >
              User ID°{user.id}
            </Link>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Name: {user.name}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Username: {user.username}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Email: {user.email}
          </Card.Subtitle>
          <Card.Text>
            Address :{user.address.street}, {user.address.suite},{" "}
            {user.address.city}{" "}
          </Card.Text>
          <Card.Text>
            <Link
              to={{
                pathname: `/Posts/${user.id}`,
                state: user,
              }}
              className="cardToLink"
            >
              Posts
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
      ;
    </div>
  );
};

export default Usercard;

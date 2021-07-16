import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Commentcard = ({ comment }) => {
  console.log(comment);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title> User ID°{comment.id}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Name: {comment.email}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Email: {comment.email}
          </Card.Subtitle>
        </Card.Body>
      </Card>
      ;
    </div>
  );
};

export default Commentcard;

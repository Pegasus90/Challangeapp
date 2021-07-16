import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Postcard = ({ post }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            {" "}
            <h2>Post ID°{post.id}</h2>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Title: {post.title}
          </Card.Subtitle>
          <hr />
          <Card.Subtitle className="mb-2 text-muted">{post.body}</Card.Subtitle>
          <hr />
          <Card.Text>
            <Link
              to={{
                pathname: `/Comments/${post.id}`,
                state: post,
              }}
              className="cardToLink"
            >
              Comments
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
      ;
    </div>
  );
};

export default Postcard;

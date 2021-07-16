import React from "react";
import { Button } from "react-bootstrap";

const User = ({ location, history }) => {
  const user = location.state;

  return (
    <div>
      <h2>{user.name}</h2>
      <h5>{user.username}</h5>
      <h5>{user.email}</h5>
      <h5>{user.phone}</h5>
      <Button
        variant="info"
        className="go-back-btn"
        onClick={() => history.goBack()}
      >
        Go Back
      </Button>
    </div>
  );
};

export default User;

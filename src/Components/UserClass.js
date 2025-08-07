import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-card">
        <h1>Rhushikesh</h1>
        <h2>1234567890</h2>
        <h2> rhushikesh@example.com</h2>
      </div>
    );
  }
}

export default UserClass;

const User = (props) => {
  return (
    <div className="user-card">
      <h1>{props.name}</h1>
      <h2>{props.contact}</h2>
      <h2>{props.email}</h2>
    </div>
  );
};

export default User;

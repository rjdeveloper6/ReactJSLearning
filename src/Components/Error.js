import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  console.log("Error:", error);
  return (
    <div className="error">
      <h1>404</h1>
      <p>Page Not Found</p>
    </div>
  );
};

export default Error;

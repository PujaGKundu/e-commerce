import { Link } from "react-router-dom";

export default function CheckOutPage() {
  return (
    <div className="container">
      <center>
        <h1>Payment made Successfully!</h1>
        <Link to={`/`}>
          <button>Click to Return to Home Page</button>
        </Link>
      </center>
    </div>
  );
}

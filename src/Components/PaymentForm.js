import { Link } from "react-router-dom";

function paymentForm() {
  return (
    <>
      <div className="container">
        <form id="checkout-form">
          <div>
            <label htmlFor="card-number" id="card-number-error">
              Card Number
            </label>
            <input
              type="Number"
              id="card-number"
              placeholder="Enter Card Number"
            />
          </div>
          <div>
            <label htmlFor="card-cvv" id="card-cvv-error">
              CVV
            </label>
            <input type="number" id="card-cvv" placeholder="CVV number" />
          </div>
          <div>
            <label htmlFor="card-expiry" id="card-expiry-error">
              Expiry
            </label>
            <input type="month" id="card-expiry" placeholder="MM/YY" />
          </div>

          <Link to={`/final`}>
            <button id="pay-button" type="submit">
              Pay
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default paymentForm;

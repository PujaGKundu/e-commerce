import React from "react";
import { Link } from "react-router-dom";

function UserInfo() {
  return (
    <>
      <div className="container">
        <form id="checkout-form">
          <h2>Enter Details</h2>
          <div>
            <label htmlFor="fname">Enter your First Name</label>
            <input type="text" id="fname" required />
          </div>

          <div>
            <label htmlFor="lname">Enter your Last Name</label>
            <input type="text" id="lname" required />
          </div>

          <div>
            <label htmlFor="email">Enter your Email</label>
            <input type="email" id="email" required />
          </div>

          <div>
            <label htmlFor="phone">Enter your Mobile</label>
            <input type="number" id="phone" required />
          </div>

          <div>
            <label htmlFor="address1">Address1</label>
            <input type="text" id="address1" required />
          </div>

          <div>
            <label htmlFor="address2">Address2 (Optional)</label>
            <input type="text" id="address2" />
          </div>

          <div>
            <label htmlFor="city">City</label>
            <input type="text" id="city" required />
          </div>

          <div>
            <label htmlFor="state">State</label>
            <input type="text" id="state" required />
          </div>

          <div>
            <label htmlFor="pincode">Pincode</label>
            <input type="number" id="pincode" required />
          </div>

          <Link to={`/payment`}>
            <button type="submit">Submit</button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default UserInfo;

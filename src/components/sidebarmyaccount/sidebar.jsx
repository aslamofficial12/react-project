import "./sidebar.css";
export default function sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="account-dashboard-div">

          <h2 className="title">Account Dashboard</h2>

          <ul>
            <li className="active">AddressBook</li>
            <li className="active">My Orders</li>

            <li className="active">My Downloadable Products</li>
            <li className="active">My Wish List</li>

          </ul>
        </div>
        <hr></hr>
        <div className="account-details-div">
          <h1 className="title">Account Details</h1>
          <ul>
            <li className="active">Get Account Details</li>
            <li className="active">Account Information</li>
            <li className="active">Stored Payment Methods</li>
            <li className="active">Billing Agreements</li>

          </ul>

        </div>


        <hr></hr>

        <div className="myproduct-review-div">
          <h1 className="title">Product Reviews</h1>

          <ul>
            <li className="active">My Product Reviews</li>
            <li className="active">Newsletter Subscriptions</li>


          </ul>

        </div>

      </div>

    </>
  );

}
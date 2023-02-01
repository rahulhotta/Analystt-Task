import { React, useState } from "react";
import "./UserCard.css";
function UserCard(props) {
  const [viewDetails, setViewDetails] = useState(false);
  return (
    <div className="userCard__container">
      <div className="userCard__mainContent-container">
        <p className="userCard__company">{props.company.name}</p>
        <div className="userCard__content">
          <h2>Name </h2>
          <p>{props.name}</p>
        </div>
        <div className="userCard__content">
          <h2>Website </h2>
          <p>{props.website}</p>
        </div>
        <div className="userCard__content">
          <h2>City </h2>
          <p>{props.address.city}</p>
        </div>
        <button
          className="userCard__detailsBtn"
          onClick={() => {
            setViewDetails((prev) => !prev);
          }}>
          {viewDetails ? "Hide Details" : "View Details"}
        </button>
      </div>

      {viewDetails ? (
        <div>
          <div className="userCard__details-desc">
            <h3>Description: </h3>
            <p>{props.company.catchPhrase}</p>
          </div>
          <div
            className="userCard__details-container">
            <div className="userCard__details-content">
              <h3>User Name: </h3>
              <p>{props.username}</p>
            </div>
            <div className="userCard__details-content">
              <h3>Email: </h3>
              <p>{props.email}</p>
            </div>
            <div className="userCard__details-content">
              <h3>Address: </h3>
              <p>
                {`${props.address.street} ${props.address.suite} ${props.address.city} ${props.address.zipcode}`}{" "}
              </p>
            </div>
            <div className="userCard__details-content">
              <h3>City: </h3>
              <p>{` ${props.address.city}`} </p>
            </div>
            <div className="userCard__details-content">
              <h3>Zip Code: </h3>
              <p>{` ${props.address.zipcode}`} </p>
            </div>
            <div className="userCard__details-content">
              <h3>Phone: </h3>
              <p>{props.phone} </p>
            </div>
            <div className="userCard__details-content">
              <h3>webstie: </h3>
              <p>{props.website} </p>
            </div>
          </div>
        </div>
      ) : undefined}
    </div>
  );
}

export default UserCard;

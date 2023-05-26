import { useContext, useState } from "react";
import { Navbar } from "../../components/navbar/navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAdd } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "../../contexts/authContext";

import "../userProfile/user.css";
import { MoviesDataContext } from "../../contexts/dataContext";

export const UserProfile = () => {
  const [tabSelected, setTabSelected] = useState("user-details");

  const { currentUser } = useContext(AuthContext);

  const { state, dispatch } = useContext(MoviesDataContext);

  const { firstName, lastName, email } = currentUser;

  const addNewAddress = () => {
    
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="user-details">
        <div className="tabs">
          <p onClick={() => setTabSelected("user-details")}>User Details</p>

          <div>
            <hr />
          </div>

          <p onClick={() => setTabSelected("address-details")}>Addresses</p>
        </div>

        <div className="user-infos">
          {tabSelected === "user-details" && (
            <div>
              <p>
                Name: {firstName} {lastName}
              </p>
              <p>Email : {email}</p>
            </div>
          )}

          {tabSelected === "address-details" && (
            <div>
              {state.address.map((details) => {
                const { name, phone, pincode, city, addressDetails, state } =
                  details;

                return (
                  <ul className="address-list">
                    <li id="name-details">{name}</li>
                    <li>
                      <span>Phone:</span> {phone}
                    </li>

                    <li>
                      <span>Pincode:</span> {pincode}
                    </li>

                    <li>
                      <span>City:</span> {city}
                    </li>

                    <li>
                      <span>Address:</span> {addressDetails}
                    </li>

                    <li>
                      <span>State:</span> {state}
                    </li>

                    <button className="address-action-btns">
                    Edit  
                    </button>

                    <button className="address-action-btns">
                    Delete
                    </button>

                    <hr />
                  </ul>
                );
              })}

              <button className="address-action-btns add-new"
              onClick={addNewAddress}
              >

              <FontAwesomeIcon icon={faAdd} id="add-icon"/>
                Add new address
              
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

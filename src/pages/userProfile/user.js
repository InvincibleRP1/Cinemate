import { useContext, useState } from "react";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import { Navbar } from "../../components/navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../../contexts/authContext";
import "../userProfile/user.css";
import { MoviesDataContext } from "../../contexts/dataContext";
import { FormData } from "./formData";
import { FooterArea } from "../../components/footer/footer";

export const UserProfile = () => {
  const [tabSelected, setTabSelected] = useState("user-details");
  const [formMode, setFormMode] = useState("Add");
  const [formAccess, setFormAccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: null,
    pincode: null,
    addressDetails: "",
    city: "",
    stateOfAddress: "",
  });

  const { currentUser } = useContext(AuthContext);
  const { state, dispatch } = useContext(MoviesDataContext);
  const { firstName, lastName, email } = currentUser;

  const addNewAddress = () => {
    setFormMode("add");
    setFormAccess(true);
    setFormData(() => ({
      name: "",
      phone: null,
      pincode: null,
      addressDetails: "",
      city: "",
      stateOfAddress: "",
    }));
  };

  const handleAddressTab = () => {
    setFormAccess(false);
    setTabSelected("address-details");
    setFormMode("details");
  };

  const handleAddingAddress = () => {
    const { _id, name, pincode, phone, addressDetails, city, stateOfAddress } =
      formData;

    if (
      _id !== "" &&
      name !== "" &&
      pincode !== null &&
      phone !== null &&
      addressDetails !== "" &&
      city !== "" &&
      stateOfAddress !== ""
    ) {
      dispatch({ type: "add-new-address", payload: formData });
    } else {
      alert("Empty values aren't allowed!");
    }

    setFormMode("details");
    setFormAccess(false);
  };

  const handleEditingAddress = (addressId) => {
    setFormMode("edit");
    setFormAccess(true);

    const gettingIndividualAddress = state.address.find(
      (addItem) => addItem._id === addressId
    );

    const { _id, name, phone, pincode, addressDetails, city, stateOfAddress } =
      gettingIndividualAddress;

    setFormData((formValues) => ({
      ...formValues,
      _id,
      name,
      phone,
      pincode,
      addressDetails,
      city,
      stateOfAddress,
    }));
  };

  const handleUpdateAddress = (addressId) => {
    const updatedAddress = state.address.map((address) =>
      address._id === addressId ? { ...formData } : address
    );

    dispatch({ type: "edit-address", payload: updatedAddress });

    setFormMode("details");
    setFormAccess(false);
  };

  const handleDeleteAddress = (itemIndex) => {
    const existingAddresses = [...state.address];
    existingAddresses.splice(itemIndex, 1);

    dispatch({ type: "delete-address", payload: existingAddresses });
  };

  
  return (
    <div className="user-page-area">
      <Navbar></Navbar>
      <h3 className="heading-text">My Account</h3>
      <div className="user-details">
        <div className="user-infos">
          <div className="tabs">
            <p
              className="tab-links"
              onClick={() => setTabSelected("user-details")}
         
            >
              User Details
            </p>

            <div>
              <hr />
            </div>

            <p
              className="tab-links"
              onClick={handleAddressTab}
            >
              Addresses
            </p>
          </div>

          {tabSelected === "user-details" && (
            <div>
              <p className="current-user-details">
                <span>Name: </span>
                {firstName} {lastName}
              </p>
              <p className="current-user-details">
                <span>Email: </span> {email}
              </p>
            </div>
          )}

          {tabSelected === "address-details" && formMode === "details" && (
            <div>
              {state.address.length === 0 && <p>No addresses present!</p>}
              {state?.address?.map((details, index) => {
                const {
                  _id,
                  name,
                  phone,
                  pincode,
                  city,
                  addressDetails,
                  stateOfAddress,
                } = details;

                return (
                  <ul className="address-list" key={`address-${_id}-${index}`}>
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
                      <span>State:</span> {stateOfAddress}
                    </li>

                    <button
                      className="address-action-btns"
                      onClick={() => handleEditingAddress(_id, details)}
                    >
                      Edit
                    </button>

                    <button
                      className="address-action-btns"
                      onClick={() => handleDeleteAddress(index)}
                    >
                      Delete
                    </button>

                    <hr />
                  </ul>
                );
              })}

              <button
                className="address-action-btns add-new"
                onClick={addNewAddress}
              >
                <FontAwesomeIcon icon={faAdd} id="add-icon" />
                Add new address
              </button>
            </div>
          )}

          {formAccess && tabSelected !== "user-details" && (
            <FormData
              tabSelected={tabSelected}
              formMode={formMode === "add" ? "add" : "edit"}
              handleClick={
                formMode === "edit" ? handleUpdateAddress : handleAddingAddress
              }
              setFormData={setFormData}
              formData={formData}
            />
          )}
        </div>
      </div>
      <FooterArea className="footer-user"></FooterArea>
    </div>
  );
};

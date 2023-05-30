import { useContext, useState } from "react";
import { Navbar } from "../../components/navbar/navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAdd } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "../../contexts/authContext";

import "../userProfile/user.css";
import { MoviesDataContext } from "../../contexts/dataContext";

export const UserProfile = () => {
  const [tabSelected, setTabSelected] = useState("user-details");

  const [formMode, setFormMode] = useState("Add");

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

  // console.log(state.address);

  const addNewAddress = () => {
    setFormMode("Add");
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
  };

  const handleEditingAddress = (addressId) => {
    setFormMode("edit");

    const gettingIndividualAddress = state.address.find(
      (addItem) => addItem._id === addressId
    );

    console.log(gettingIndividualAddress);

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
  };

  const handleDeleteAddress = (itemIndex) => {
    const existingAddresses = [...state.address];
    existingAddresses.splice(itemIndex, 1);

    dispatch({ type: "delete-address", payload: existingAddresses });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="user-details">
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

          <p className="tab-links" onClick={handleAddressTab}>
            Addresses
          </p>
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

          {tabSelected === "address-details" && formMode === "Add" && (
            <div className="form-add">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your phone number"
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your Pincode"
                onChange={(e) =>
                  setFormData({ ...formData, pincode: e.target.value })
                }
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your City"
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />

              <textarea
                name=""
                id=""
                cols="20"
                rows="5"
                placeholder="Enter your address"
                onChange={(e) =>
                  setFormData({ ...formData, addressDetails: e.target.value })
                }
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your state"
                onChange={(e) =>
                  setFormData({ ...formData, stateOfAddress: e.target.value })
                }
              />

              <button
                className="address-action-btns"
                onClick={handleAddingAddress}
              >
                Add
              </button>
            </div>
          )}

          {tabSelected === "address-details" && formMode === "edit" && (
            <div className="form-add">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                value={formData.name}
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your phone number"
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                value={formData.phone}
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your Pincode"
                onChange={(e) =>
                  setFormData({ ...formData, pincode: e.target.value })
                }
                value={formData.pincode}
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your City"
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                value={formData.city}
              />

              <textarea
                name=""
                id=""
                cols="20"
                rows="5"
                placeholder="Enter your address"
                onChange={(e) =>
                  setFormData({ ...formData, addressDetails: e.target.value })
                }
                value={formData.addressDetails}
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your state"
                onChange={(e) =>
                  setFormData({ ...formData, stateOfAddress: e.target.value })
                }
                value={formData.stateOfAddress}
              />

              <button
                className="address-action-btns"
                onClick={() => handleUpdateAddress(formData._id)}
              >
                Update
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

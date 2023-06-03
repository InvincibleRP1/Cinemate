import "../checkout/checkout.css";

export const AddressDetails = ({ state, addressValue }) => {
  return (
    <>
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
          <div className="address-details">
            <input
              type="radio"
              name="address"
              onClick={() => addressValue(_id)}
              key={_id}
            />

            <label className="address-lists" key={`address-${_id}-${index}`}>
              <li id="name">{name}</li>
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
            </label>
          </div>
        );
      })}
    </>
  );
};
